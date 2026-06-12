# ESPACE-CLIENT-CANDIDAT.md — guide d'exploitation (interne)

> Créé le 2026-06-12. Couvre : l'**espace client** (page chiffrée des prix marque
> blanche), l'**espace candidat** (dépôt + suivi de candidature), et le **déploiement
> Netlify** qui garantit que rien d'interne n'est servi. Chiffres : `PRICING.md` fait foi.

---

## 1. Espace client (`espace-client.html`) — prix MB protégés

### Comment ça marche
Le contenu (one-pager partenaire + grilles MB §1.b et §3 de `PRICING.md`) est **chiffré
AES-256-GCM** dans la page, clé dérivée du mot de passe par **PBKDF2-SHA256
(310 000 itérations)**. Rien n'est lisible dans le code source servi. Le déverrouillage
se fait dans le navigateur (HTTPS ou localhost requis) ; la session reste ouverte le
temps de l'onglet (sessionStorage). Bouton **« Imprimer / PDF de cadrage »** : génère le
PDF confidentiel à remettre sous NDA (mise en page print dédiée, date du jour).

### Mot de passe
- **Un seul mot de passe partagé**, remis aux partenaires **au cadrage, sous NDA** —
  jamais par écrit dans un cold email, jamais committé dans le dépôt.
- Le mot de passe en vigueur est transmis hors dépôt (chat / gestionnaire de mots de
  passe de la direction).

### Rotation du mot de passe (à chaque départ de partenaire, ou trimestriellement)
```bash
node tools/espace-client-build.mjs "Nouveau-Mot-De-Passe-Fort" --verify
git add espace-client.html && git commit -m "Rotation accès espace client" && git push
```

### Mettre à jour les prix / le contenu
1. Modifier `tools/espace-client-contenu.html` (et d'abord `PRICING.md`, qui fait foi).
2. Relancer la commande de génération ci-dessus (même mot de passe ou nouveau).
3. Committer `espace-client.html` (+ la source modifiée).

### ⚠️ Sécurité — à lire
- `tools/espace-client-contenu.html` est la **source en clair** : elle est dans le dépôt
  (comme `PRICING.md`, qui expose déjà ces prix). **Tant que le dépôt GitHub est public,
  les prix MB fuient par le dépôt, pas par le site.** → **Passer le dépôt en privé dès
  que le site est branché sur Netlify** (déjà prévu).
- Le site servi, lui, est propre : `tools/build-site.sh` ne copie dans `_site/` que les
  pages publiques + `assets/` — ni .md, ni `tools/`, ni CRM, ni trésorerie.

---

## 2. Espace candidat (`espace-candidat.html` + `suivi-candidature.html`)

### Dépôt de candidature
- Formulaire **Netlify Forms** (`name="candidature"`, honeypot anti-spam). À activer :
  au premier deploy, vérifier dans Netlify → **Forms** que « candidature » est détecté ;
  configurer la **notification email** vers contact@salverys.fr (Forms → Notifications).
- Tier gratuit : **100 soumissions/mois** (largement assez). Pas d'upload de fichier :
  le CV est demandé en **lien** (Drive/Dropbox).
- **Repli automatique** : si le POST échoue (site pas encore sur Netlify, Forms
  inactif), le candidat reçoit un lien **email pré-rempli** vers contact@salverys.fr —
  aucune candidature perdue.
- Alternative si on quitte Netlify : Formspree — remplacer l'attribut du `<form>` par
  `action="https://formspree.io/f/<ID>"` et retirer `data-netlify`.

### Code candidat & suivi
- Chaque dépôt génère un code **SLV-XXXXX** (affiché au candidat + inclus dans la
  soumission reçue par email).
- Le suivi lit `assets/candidatures-statuts.json` : mapping `code → statut` parmi
  `recue · entretien · test · acceptee · refusee`. **Tout code absent = « reçue »**
  (donc rien à faire pour les nouveaux dépôts).
- **Mise à jour d'un statut** : éditer le JSON, committer, pousser (Netlify redéploie).
  ```json
  { "SLV-7K2MQ": "entretien" }
  ```
- **RGPD** : le JSON ne contient **que des codes anonymes** — jamais de nom/email.
  Supprimer les codes des candidatures clôturées depuis plus de 6 mois.

---

## 3. Déploiement Netlify

- `netlify.toml` : build = `bash tools/build-site.sh`, publish = `_site/`.
- Pages servies : index, 3 simulateurs, espace-client, espace-candidat,
  suivi-candidature + `assets/`. **Tout le reste est exclu** (le script échoue si un .md
  ou `tools/` se retrouve dans `_site/`).
- En-têtes : `espace-client.html` servi en `noindex` + `Cache-Control: no-store`.
- Test local du build : `bash tools/build-site.sh && python3 -m http.server -d _site`.

## 4. Checklist mise en ligne
1. ☐ Brancher le dépôt sur Netlify (build auto via `netlify.toml`).
2. ☐ **Passer le dépôt GitHub en privé.**
3. ☐ Activer la notification email Netlify Forms → contact@salverys.fr.
4. ☐ Tester l'espace client en HTTPS avec le mot de passe en vigueur.
5. ☐ Faire un dépôt de candidature test + vérifier la réception + le suivi.
6. ☐ Retirer `SLV-DEMO1` de `assets/candidatures-statuts.json`.
