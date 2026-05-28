# Stratégie de marque — Salverys

> Document de référence interne. Toute décision visuelle ou de naming (site, CRM,
> cold email Emelia, cartes de visite, signatures, propositions commerciales)
> s'aligne sur ce document.

---

## 1. Décision (TL;DR)

**Une seule marque : Salverys. Deux lignes de service sous la même bannière.**

On retient l'**Option A — « maison mère + divisions »** : un logo Salverys
unique, avec les deux métiers présentés comme des lignes de service, pas comme
des marques autonomes.

> **Salverys.** — Télésecrétariat Médical · Support IT & Applicatif

**Écarté (Option B) :** créer deux sous-marques indépendantes (« Salverys
Médical » / « Salverys IT ») avec sites, logos et supports séparés. Prématuré et
plus cher à gérer au stade actuel (équipe de 10, on repart de zéro).

---

## 2. Pourquoi l'Option A

| Critère | Option A (retenue) | Option B (écartée) |
|---|---|---|
| Coût de gestion | 1 site, 1 charte, 1 jeu de supports | x2 sur tout |
| Notoriété | Capitalise sur **un seul** nom | Dilue l'effort sur deux |
| Cross-selling | Naturel (« on fait aussi… ») | Frein : deux marques perçues distinctes |
| Crédibilité au démarrage | Une marque qui paraît plus large | Deux marques qui paraissent petites |

L'enjeu au démarrage est de **concentrer** la notoriété, pas de la fragmenter.
On reconsidérera une architecture multi-marques seulement si un segment prend
une ampleur qui justifie sa propre identité (pas avant).

---

## 3. Architecture de marque

```
                        SALVERYS  (marque mère)
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                            │
  Télésecrétariat Médical                  Support IT & Applicatif
  (priorité n°1 commerciale)               (Support applicatif N1 + Helpdesk IT N1)
```

- **Salverys** porte la marque, la promesse et la réputation.
- Les deux lignes de service sont des **descripteurs**, jamais des marques :
  on écrit « Salverys — Télésecrétariat Médical », pas « Salverys Médical » en
  logo autonome.
- Priorité commerciale inchangée : **télésecrétariat médical d'abord**, le
  support IT en second métier.

---

## 4. Le lockup officiel

**Forme longue (site, page d'accueil, signature institutionnelle) :**

> **Salverys.** — Télésecrétariat Médical · Support IT & Applicatif

**Forme courte par contexte** (quand la cible est connue, on ne montre qu'une
ligne pour rester lisible) :

- Cible santé → **Salverys.** — Télésecrétariat Médical
- Cible éditeurs / IT → **Salverys.** — Support IT & Applicatif

**Règles :**
- Le point final « **.** » fait partie du logotype, on le garde.
- Le descripteur s'écrit toujours **après** le nom, jamais à la place.
- Jamais de logo « Salverys Médical » ou « Salverys IT » isolé.

---

## 5. Identité visuelle

### Logo principal de référence
Le logo **bleu marine foncé + points dorés/jaunes** (version Support IT &
Applicatif, la plus aboutie) devient la **référence visuelle maître** de toute
la marque, **y compris pour le métier médical**.

### Déclinaison médicale
La version au pictogramme « caducée-casque » teinte **sauge/vert** reste
utilisable **uniquement** comme déclinaison sectorielle sur les supports
strictement santé (ex. plaquette cabinets médicaux). Elle ne remplace pas le
logo maître et doit garder le **même logotype** « Salverys. ».

### Palette
La référence de couleur fait foi à partir du **fichier logo maître** (navy +
doré). Les jetons CSS du site doivent s'aligner dessus.

| Rôle | Valeur actuelle dans le site | Statut |
|---|---|---|
| Navy maître | `#013C58` (`.theme-it`) | À confirmer comme couleur primaire globale |
| Doré / jaune | `#FFD35B` (`.theme-it`) | Accent maître |
| Bleu profond (thème par défaut) | `#2E3B4E` | Variante — à harmoniser |
| Sauge | `#6F8770` | **Réserver** à la déclinaison santé uniquement |

> ⚠️ **Incohérence à arbitrer** : aujourd'hui le thème **par défaut** du site
> (`assets/site.css`) utilise le bleu profond + **sauge verte** comme accent,
> alors que la décision désigne le **navy + doré** comme identité principale.
> Action recommandée : faire du couple **navy + doré** le thème par défaut, et
> ne garder la sauge que pour les blocs explicitement « santé ». Voir §7.

---

## 6. Naming — règles fermes

- **Salverys** partout, sur tous les livrables et tous les canaux.
- Les anciens noms **Nesvalo** et **Vinlo** ne doivent apparaître dans aucun
  livrable, séquence, CRM ou support client.
- **Exception technique (interne, invisible client)** : dans `CRM_Salverys.html`,
  les clés `localStorage` préfixées `vinlo_` restent inchangées pour ne pas
  effacer les données déjà saisies. C'est de la plomberie de stockage, pas de la
  marque.
- À noter (cf. §7) : une clé `nesvalo_custom_templates_v1` subsiste dans le CRM.
  Même logique que les clés `vinlo_` (renommer effacerait les modèles enregistrés),
  mais à tracer ici car elle porte l'ancien nom.

---

## 7. Plan d'action / checklist

État des lieux du dépôt à date :

- [x] Site (`index.html`, simulateurs) en marque **Salverys**.
- [x] CRM (`CRM_Salverys.html`) en marque **Salverys** côté affichage.
- [x] Aucun **Nesvalo/Vinlo** visible côté client (uniquement clés `localStorage`).
- [ ] **Harmoniser la charte couleur** : passer le thème par défaut du site sur
      **navy + doré** (aujourd'hui bleu profond + sauge). Réserver la sauge aux
      blocs santé. — *décision produit à confirmer avant exécution.*
- [ ] **Verrouiller les hex définitifs** depuis le fichier logo maître (navy +
      doré) et les reporter dans `assets/site.css` comme source unique de vérité.
- [ ] **Décliner le lockup** « Salverys. — Télésecrétariat Médical · Support IT
      & Applicatif » sur : footer du site, signature Emelia, cartes de visite,
      en-tête des propositions commerciales.
- [ ] *(optionnel, interne)* tracer / planifier le sort de la clé
      `nesvalo_custom_templates_v1` dans le CRM.

> Règle CLAUDE.md rappelée : **SaaS-first**. Cette stratégie ne nécessite aucun
> développement maison — c'est un cadrage de marque. Toute mise en œuvre visuelle
> reste de l'édition de gabarits existants (CSS/HTML), pas du nouveau code.
