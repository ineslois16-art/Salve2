#!/usr/bin/env node
/**
 * Génère espace-client.html : chiffre tools/espace-client-contenu.html
 * (AES-256-GCM, clé dérivée PBKDF2-SHA256) et injecte le payload dans
 * tools/espace-client-template.html.
 *
 * Usage :
 *   node tools/espace-client-build.mjs "mot-de-passe"           # génère
 *   node tools/espace-client-build.mjs "mot-de-passe" --verify  # génère + vérifie le déchiffrement
 *
 * Le mot de passe n'est jamais écrit sur disque. Rotation : relancer avec le
 * nouveau mot de passe et recommitter espace-client.html.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pbkdf2Sync, randomBytes, createCipheriv, createDecipheriv } from 'node:crypto';

const ITER = 310000;
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const password = process.argv[2];
if (!password || password.length < 12) {
  console.error('Usage : node tools/espace-client-build.mjs "mot-de-passe (12+ caractères)" [--verify]');
  process.exit(1);
}

const content = readFileSync(join(root, 'tools/espace-client-contenu.html'), 'utf8');
const template = readFileSync(join(root, 'tools/espace-client-template.html'), 'utf8');

const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, ITER, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const encrypted = Buffer.concat([cipher.update(content, 'utf8'), cipher.final(), cipher.getAuthTag()]);

const vault = JSON.stringify({
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  iter: ITER,
  data: encrypted.toString('base64'),
});

writeFileSync(join(root, 'espace-client.html'), template.replace('__VAULT__', vault));
console.log('✓ espace-client.html généré (' + encrypted.length + ' octets chiffrés, PBKDF2 ' + ITER + ' itérations).');

if (process.argv.includes('--verify')) {
  const v = JSON.parse(vault);
  const buf = Buffer.from(v.data, 'base64');
  const tag = buf.subarray(buf.length - 16);
  const body = buf.subarray(0, buf.length - 16);
  const k2 = pbkdf2Sync(password, Buffer.from(v.salt, 'base64'), v.iter, 32, 'sha256');
  const d = createDecipheriv('aes-256-gcm', k2, Buffer.from(v.iv, 'base64'));
  d.setAuthTag(tag);
  const plain = Buffer.concat([d.update(body), d.final()]).toString('utf8');
  if (plain !== content) { console.error('✗ Vérification : le déchiffré ne correspond pas.'); process.exit(1); }
  const probes = ['1 350', '0,90', '1 700'];
  const missing = probes.filter(p => !plain.includes(p));
  if (missing.length) { console.error('✗ Vérification : prix manquants dans le contenu : ' + missing.join(', ')); process.exit(1); }
  console.log('✓ Vérification : déchiffrement OK avec ce mot de passe, prix MB présents dans le contenu.');
}
