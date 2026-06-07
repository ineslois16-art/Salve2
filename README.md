# Salve2 — BPO Francophone Salverys

**BPO (Business Process Outsourcing) basé à Antananarivo (Madagascar)** ciblant des clients français via trois niches : télésecrétariat médical, support applicatif N1 SaaS, et helpdesk IT N1.

---

## 🎯 Vue d'ensemble du projet

**Salverys** est une jeune structure (équipe de 10 personnes) issue d'une direction expérimentée (ex-structure 1000 collaborateurs). L'ambition : déployer **trois niches complémentaires** en France, en suivant une séquence stricte :  
**Prospection → Équipe → Infrastructure**

### Avantages compétitifs
- ✅ **Fuseau horaire compatible** : 8h–20h français = mêmes horaires de travail
- ✅ **Français langue maternelle** : tous les agents sont natifs francophones
- ✅ **Coût ~40 % inférieur** à un prestataire français équivalent (CDI interne vs externalisé)
- ✅ **Pas de recrutement** : activation rapide du service, zéro turnover

---

## 📂 Structure du projet

```
Salve2/
├── index.html                          # Site web public (landing page)
├── assets/
│   ├── site.css                       # Styles globaux
│   ├── site.js                        # Interactions du site
│   └── logo-salverys.svg              # Branding
├── CRM_Salverys.html                  # CRM leads (localStorage, salverys_* prefix)
├── simulateur-salverys.html            # Calc prix télésecrétariat médical
├── simulateur-informatique.html        # Calc prix support N1 SaaS
├── simulateur-helpdesk-it.html         # Calc prix helpdesk IT N1
├── PRICING.md                          # Source unique vérité tarifaire
├── CLAUDE.md                           # Instructions projet & contexte
├── BRANDING-Salverys.md                # Charte graphique & messaging
├── OUTREACH-SEQUENCE.md                # Séquence de prospection générale
├── OUTREACH-telesec-marque-blanche.md  # Outreach télésecrétariat
├── OUTREACH-IT-N1-marque-blanche.md    # Outreach support & helpdesk
├── OFFRE-MEDICAL.md                    # Détails offre télésecrétariat
├── ONEPAGER-CHAINES-MEDICAL.md         # One-pager pour chaînes médicales
├── TELESEC-TARGETS.md                  # Liste ciblée cabinets/chaînes
├── ESN-TARGETS.md                      # Prospects ESN/IT
├── IDEAL-CUSTOMER-PROFILE.md           # ICP par niche
├── PROSPECT-ANALYSIS*.md               # Analyses détaillées de prospects clés
├── RAPPORT-PRIX.html                   # Réflexion approfondie tarifaire
├── SESSION-ESN-ENVOI-MAILS.html        # Log envois campagne ESN
├── .claude/
│   └── skills/sales/scripts/
│       ├── lead_scorer.py              # Scoring automatique leads
│       ├── contact_finder.py           # Recherche contacts décideurs
│       ├── analyze_prospect.py         # Analyse prospect multi-critères
│       └── generate_pdf_report.py      # Génération rapports PDF
└── .git/                               # Historique versions

```

---

## 💼 Les trois niches

### 1️⃣ Télésecrétariat médical — **PRIORITÉ ABSOLUE**

**Cible** : Cabinets de médecine générale, spécialités, chaînes médicales.

**Offre** :
- Réception appels 8h–20h (5j/7, options soir/WE)
- Intégration native : Doctolib, Maiia, Médistory, Cegedim
- Prise RDV, screening appels médicaux, messages patients
- Marque blanche (équipe répond sous la marque du cabinet)

**Grille tarifaire publique** (PRICING.md §1) :
| Forfait | Volume | Prix mensuel |
|---|---|---|
| Essentiel | ≤250 appels/mois | **350 €** |
| Confort | ≤500 appels/mois | **590 €** |
| Intensif | ≤900 appels/mois | **950 €** |
| Sur-mesure | >900 | Devis |

**Offre de lancement** : 1er mois à -50 %.

**Simulateur** : `simulateur-salverys.html`

---

### 2️⃣ Support Applicatif N1 SaaS & Helpdesk IT N1 — **PRIORITÉ 2**

**Cible** : 
- Éditeurs SaaS français (hotline support client)
- ESN et prestataires IT (helpdesk interne ou externalisé marque blanche)

**Offre** :
- Support niveau 1 (questions usage, tickets simples)
- Escalade + docs internes pour l'équipe client
- Disponibilité 8h–20h synchrone avec les clients FR
- **Go-to-market dual** : directe (client final) ou marque blanche (ESN prend marge 25–35%)

**Tarification** (PRICING.md §3) :
- **Modèles** : ETP/mois > À l'heure > À l'interaction
- **ETP dédié** (principal) :
  - Direct : 1 900–2 400 €/mois (N1 SaaS) · 2 200–2 800 € (ITIL helpdesk)
  - Marque blanche : 1 350–1 700 € · 1 550–2 000 €
- **À l'heure** : 12–15 €/h (direct) · 8–11 €/h (marque blanche)
- **À l'interaction** : 2,5–4 €/ticket (direct) · 1,8–2,8 € (marque blanche)

**Engagement** : 3 mois initial, puis 12 mois renouvelable.

**Simulateurs** : `simulateur-informatique.html` · `simulateur-helpdesk-it.html`

---

### 3️⃣ Bailleurs sociaux & grandes structures — **PRIORITÉ 3**

**Positionnement** : Capacité d'appoint pour débordements, pas remplacement de CRC.

Toujours en sur-devis. Tarification sur demande (PRICING.md §4).

---

## 🛠️ Technologie & stack

| Domaine | Stack |
|---|---|
| **Frontend** | HTML5 · CSS3 (vanille) · JavaScript ES6 (vanille) |
| **CRM** | localStorage (salverys_* prefix, seed 180 leads) |
| **Simulateurs** | JavaScript côté client, calcul prix ETP/heure/ticket |
| **Data** | Python (scripts de scoring, analyse, reports PDF) |
| **Versionning** | Git (Anthropic Claude Code) |

### Fichiers clés

#### Site public
- **`index.html`** : Landing page Salverys avec hero, trust cards, CTA vers simulateurs
- **`assets/site.css`** : Styles globaux (reveal animations, grid hero, dark mode)
- **`assets/site.js`** : Nav sticky, hamburger menu mobile, compteurs animés, intersection observers

#### CRM & Leads
- **`CRM_Salverys.html`** : Dashboard complet (import/export, scoring auto, tags, notes, search)
  - localStorage key prefix : `salverys_` (changement 2026-05-29)
  - Seed initial : 180 leads vérifiés + décideurs
  - Champs : nom, email, téléphone, niche, stage pipeline, notes, tags

#### Outils de tarification
- **`simulateur-salverys.html`** : Forfait médical (fourchette volume → prix)
- **`simulateur-informatique.html`** : ETP/heure support SaaS (fourchette estimée)
- **`simulateur-helpdesk-it.html`** : ETP/heure helpdesk IT N1 (estimations directe + marque blanche)

#### Analyses & rapports
- **`.claude/skills/sales/scripts/`** :
  - `lead_scorer.py` : Scoring auto (critères : secteur, taille, budget fit, fit niche)
  - `contact_finder.py` : Extraction contacts via scraping/API LinkedIn (context)
  - `analyze_prospect.py` : Scoring multi-critères + matrice de décision
  - `generate_pdf_report.py` : Rapports PDF (prospect brief, pricing breakdown)

---

## 📋 Documentation clé

### Commerciale
- **`PRICING.md`** ⭐ **SOURCE UNIQUE DE VÉRITÉ TARIFAIRE**  
  Tous les prix, grilles, benchmarks et conditions d'essai/lancement. Tout chiffre ailleurs (emails, CRM, simulateurs) doit être synchronisé avec ce fichier.

- **`CLAUDE.md`** : Contexte projet, règles, priorities, branding (Salverys vs anciens noms Nesvalo/Vinlo)

- **`BRANDING-Salverys.md`** : Charte graphique, palette, messaging, ton de voix

- **`OUTREACH-SEQUENCE.md`** : Séquence prospection générale (structure, timing, objections)

- **`OUTREACH-telesec-marque-blanche.md`** : Emails & messaging spécifiques télésecrétariat

- **`OUTREACH-IT-N1-marque-blanche.md`** : Emails & messaging support/helpdesk IT

- **`IDEAL-CUSTOMER-PROFILE.md`** : ICP par segment (critères budget, secteur, taille, pain points)

- **`PROSPECT-ANALYSIS.md`** + individuelles (`*-Callmed.md`, `*-Kincy.md`, etc.) : Deep-dives prospects prioritaires

### Opérationnelle
- **`TELESEC-TARGETS.md`** : Liste ciblée cabinets + chaînes médicales (départements, contacts, budget)
- **`ESN-TARGETS.md`** : Prospects ESN/prestataires IT
- **`SESSION-WARMUP-DEMARRAGE.md`** : Checklist démarrage structure
- **`WARMUP-MANUEL.md`** : Procédures manuelles leads

### Rapports / Références
- **`RAPPORT-PRIX.html`** : Réflexion approfondie (benchmarking FR, justification grille, hypothèses volumes)

---

## ⚙️ Règles d'arbitrage clés

### SaaS-first avant tout code maison
**Avant de proposer une fonctionnalité**, se poser :
- Est-ce qu'un SaaS résout déjà ça mieux & plus vite ?
- Le coût de maintenance du code vs l'abonnement vaut-il vraiment le coup ?

**Réflexe par défaut** : acheter, pas construire. Code maison seulement si :
- Aucun SaaS ne couvre le besoin, **ou**
- Coût SaaS dépasse clairement le coût de maintenance interne

**Priority domains** : analytics, paiement, facturation, tracking email.

### Synchronisation PRICING.md = source unique
Toute divergence tarifaire → **PRICING.md fait foi**.  
Si une copy (email, CRM, simulateur) affiche un prix différent, c'est une **erreur à corriger de suite**.

---

## 🚀 Comment utiliser ce projet

### Pour Gemini / NotebookLM
Partez de cette documentation pour :
1. **Comprendre le positionnement** : 3 niches, prix fermes (médical) vs fourchettes (IT)
2. **Aligner les emails & copy** : toute prospection doit respecter PRICING.md et OUTREACH-*
3. **Analyser les prospects** : utiliser scripts Python + PROSPECT-ANALYSIS pour scoring
4. **Générer rapports** : PDF briefs client, pricing breakdowns, comparaisons concurrence

### Pour Claude Code (development)
- **Branches** : développer sur `claude/salverys-*` (cf. CLAUDE.md)
- **Commit messages** : référencer la niche ou l'outil (ex. `fix: simulateur médical formule ETP`)
- **Tests** : tester simulateurs manuellement (fourchettes de prix, edge cases)
- **Versioning** : localStorage key prefixes, compatibility avec ancien stockage

---

## 📞 Contact & info

**BPO basé à** : Antananarivo, Madagascar  
**Cible client** : France (métropolitaine)  
**Email** : valerienrk@gmail.com  
**Date contexte** : 2026-06-07  
**Status** : En déploiement prospection médical, montée en charge équipe

---

## 📌 Notes système

- **localStorage prefix** : `salverys_` (changement effectif 2026-05-29)
- **Ancien branding** : Nesvalo & Vinlo **ne doivent plus apparaître nulle part**
- **Consensus commercial** : Salverys = nom retenu (temporaire → long terme)
- **Cold mailing** : Emelia (outil prospection email)
- **Simulateurs publics** : uniquement médical (prix fermes) + fourchettes IT (lead capture)
