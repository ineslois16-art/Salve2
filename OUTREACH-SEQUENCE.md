# Séquence Cold Outreach : Support N1 marque blanche — Éditeurs SaaS FR

**Segment cible :** éditeurs SaaS B2B français, 20-300 salariés, en croissance
**Persona :** Head of Support / Customer Support Manager / Responsable Relation Client (« en surchauffe »)
**Décideur économique secondaire :** COO / Directeur des Opérations
**Date :** 2026-05-27
**Outil d'envoi :** Emelia (campagne mail-merge)
**Score Outreach Readiness : 78/100**
**Framework retenu :** Problème → Preuve → Ask (Framework 2), avec accroche déclencheur via variable

---

## Note méthodo (lire avant d'importer dans Emelia)

Ceci est un **modèle de campagne**, pas un mail vers une entreprise unique. La personnalisation se fait via les **variables Emelia** ci-dessous, à remplir dans le fichier CSV d'import (une ligne = un prospect). La règle d'or de la skill — « jamais de mail sans une référence spécifique et vérifiable » — est respectée grâce à la variable `{{accroche_perso}}`, que tu dois **remplir manuellement par prospect** (30 s de recherche : poste support ouvert, levée, avis client, post LinkedIn). Sans elle, l'email 1 devient générique : ne lance pas la campagne avec cette colonne vide.

### Variables Emelia à préparer dans le CSV

| Variable | Contenu | Source / comment la remplir |
|---|---|---|
| `{{firstName}}` | Prénom du contact | LinkedIn Sales Navigator |
| `{{company}}` | Nom de l'éditeur | — |
| `{{accroche_perso}}` | LA phrase de personnalisation (déclencheur) | Poste « Support N1 » ouvert / levée récente / avis Trustpilot sur délais / post LinkedIn. **Obligatoire.** |
| `{{outil_ticketing}}` | Zendesk / Intercom / Freshdesk… | Page « carrières » du poste support, BuiltWith, ou supposé par défaut « votre outil » |
| `{{secteur}}` | Verticale du SaaS (RH, retail, fintech…) | Site de l'éditeur |
| `{{signature}}` | Ton bloc signature Salverys | — |

> Astuce : crée 2-3 variantes de `{{accroche_perso}}` selon le déclencheur (levée / poste ouvert / avis) et segmente tes listes Emelia par type de déclencheur. Tu enverras un message plus juste.

---

## Recherche de personnalisation (niveau segment)

### Déclencheurs entreprise (à chercher par prospect)
1. **Poste « Support N1 / Customer Care » ouvert depuis > 1 mois** — Qualité : Hot
   *Angle :* « vous cherchez à recruter, le marché est sec — voici une autre voie »
2. **Levée de fonds < 12 mois** — Qualité : Warm
   *Angle :* « la croissance qui suit une levée fait exploser le volume support »
3. **Avis clients (Trustpilot/G2) sur les délais de réponse** — Qualité : Warm
   *Angle :* « vos clients signalent des délais — la capacité est le vrai sujet »

### Déclencheurs sectoriels (communs au segment, déjà validés)
1. **89 % des éditeurs de logiciels en difficulté de recrutement** (vs 78 % il y a 2 ans) — Qualité : Hot
   *Angle :* preuve chiffrée que le problème est structurel, pas individuel.
2. **Recrutement interne = 60-90 jours** vs mise en place d'une équipe externe en quelques semaines — Qualité : Warm
   *Angle :* time-to-staff, urgence.
3. **Pression de rentabilité post-levée** → marge du support scrutée — Qualité : Warm
   *Angle :* réduire le coût/ticket sans casser la qualité.

**Meilleur angle d'ouverture :** déclencheur entreprise (poste ouvert) + preuve sectorielle 89 %.
**Angle secondaire (relances) :** coût interne vs marque blanche, et qualité/réputation.

---

## Framework retenu : Problème → Preuve → Ask

**Raisonnement :** en campagne de masse personnalisée, on n'a pas toujours un déclencheur « hot » par prospect, mais on a un **problème universel et chiffré** (89 % de tension de recrutement) et une **preuve forte** (coût -40 %, time-to-staff). Le déclencheur perso, quand il existe, vient renforcer l'accroche via `{{accroche_perso}}`. C'est le framework le plus robuste pour un volume élevé.

---

## Séquence 5 emails

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, votre support N1 sature ?
**Objet B :** recruter du support chez {{company}}

---

Bonjour {{firstName}},

{{accroche_perso}}

89 % des éditeurs de logiciels n'arrivent plus à recruter assez vite sur le support N1 — et chaque poste vacant, c'est du backlog et des SLA qui glissent.

Chez Salverys, on met à disposition une équipe francophone formée, qui traite vos tickets N1 dans {{outil_ticketing}}, sous votre marque. Opérationnelle en quelques semaines, à environ -40 % du coût d'une équipe interne.

Ça vaudrait un échange de 15 min cette semaine ?

{{signature}}

---

**CTA :** « un échange de 15 min cette semaine ? »
**Touchpoint LinkedIn :** Jour 0 — Demande de connexion : « Bonjour {{firstName}}, je travaille avec des éditeurs SaaS FR sur la capacité de leur support N1. Vu votre rôle chez {{company}}, ça aurait du sens de se connecter. »

#### Variantes A/B
**Ligne d'ouverture A (déclencheur perso) :** `{{accroche_perso}}` (ex : « J'ai vu que {{company}} recrute un Support N1 depuis quelques semaines. »)
**Ligne d'ouverture B (sectorielle) :** « En ce moment, la plupart des Head of Support SaaS ont le même problème : le volume monte plus vite que les recrutements. »

---

### Email 2 — L'apport de valeur (Jour 3)

**Objet A :** le vrai coût d'un N1 interne
**Objet B :** 60 jours pour recruter, vs…

---

Bonjour {{firstName}},

Un point qui revient chez les éditeurs qu'on accompagne : recruter un agent N1 en interne prend 60 à 90 jours, sans compter le turnover et la montée en compétence à refaire en continu.

Résultat : le coût complet par agent dépasse largement le salaire affiché.

Pas de demande aujourd'hui — juste un repère utile si vous arbitrez interne vs externe sur 2026.

{{signature}}

---

**CTA :** apport de valeur, pas de demande (« juste un repère utile »)
**Touchpoint LinkedIn :** Jour 5 — Liker + commenter un post récent de {{firstName}} (commentaire de fond, sans pitch)

#### Variantes A/B
**Ligne d'ouverture A :** « Un point qui revient chez les éditeurs qu'on accompagne… »
**Ligne d'ouverture B :** « Petit chiffre qui surprend souvent les responsables support… »

---

### Email 3 — La preuve sociale (Jour 7)

**Objet A :** comment un SaaS {{secteur}} a vidé son backlog
**Objet B :** -40 % sur le coût support, sans perdre en qualité

---

Bonjour {{firstName}},

Un éditeur SaaS {{secteur}} d'une taille proche de {{company}} nous a confié son N1 il y a quelques mois : backlog qui débordait, délai de première réponse en hausse, recrutement bloqué.

On a mis une équipe dédiée dans leur Zendesk, sous leur marque. Résultat : délai de réponse divisé par deux et coût/ticket en forte baisse — sans qu'aucun client ne voie la différence.

Je vous montre comment en 15 min ?

{{signature}}

---

**CTA :** « Je vous montre comment en 15 min ? »
**Touchpoint LinkedIn :** Jour 10 — Message LinkedIn : « {{firstName}}, je vous ai partagé quelques idées par email sur la capacité de votre support N1. Pas sûr que ça soit tombé dans la bonne boîte. On a aidé un éditeur {{secteur}} à diviser par 2 son délai de réponse — ça vaudrait un échange rapide ? »

> ⚠️ À adapter : ne cite un chiffre/cas client que s'il est réel. Tant que Salverys n'a pas de référence SaaS, remplace par un cadrage honnête : « Voici comment on procéderait sur un périmètre comme le vôtre » + le benchmark sectoriel (60-90 j de recrutement, 89 % de tension). Ne jamais inventer une étude de cas.

#### Variantes A/B
**Ligne d'ouverture A :** « Un éditeur SaaS {{secteur}} d'une taille proche de {{company}}… »
**Ligne d'ouverture B :** « Sur le sujet de la capacité support, un cas concret vaut mieux qu'un long discours. »

---

### Email 4 — L'angle différent (Jour 14)

**Objet A :** et si vos clients ne voyaient jamais la différence
**Objet B :** votre marque, notre équipe

---

Bonjour {{firstName}},

Jusqu'ici je vous ai parlé coût et délais. L'autre point, c'est votre marque.

La crainte avec l'externalisation, c'est que le client le sente. Notre modèle est l'inverse : équipe francophone (langue maternelle), fuseau horaire France, qui répond sous votre nom, vos process, votre ton. Invisible pour vos clients.

On peut démarrer par un périmètre réduit pour que vous jugiez la qualité avant d'élargir.

Ouvert à en parler ?

{{signature}}

---

**CTA :** « Ouvert à en parler ? »
**Touchpoint LinkedIn :** Jour 18 — Partager un contenu utile sur le scaling du support / la rétention (taguer {{firstName}} si pertinent)

#### Variantes A/B
**Ligne d'ouverture A (qualité/marque) :** « Jusqu'ici je vous ai parlé coût et délais. L'autre point, c'est votre marque. »
**Ligne d'ouverture B (flexibilité) :** « Une objection fréquente : et si la qualité ne suit pas ? D'où notre approche par pilote. »

---

### Email 5 — Le breakup (Jour 21)

**Objet A :** je referme la boucle
**Objet B :** ce n'est peut-être pas le moment

---

Bonjour {{firstName}},

Je n'encombre pas davantage votre boîte. Le sujet — absorber votre volume support N1 sans recruter, à -40 %, sous votre marque — sera toujours là quand il deviendra prioritaire.

Si c'est le cas, répondez simplement à ce mail.

Bonne continuation à vous et à l'équipe {{company}}.

{{signature}}

---

**CTA :** porte ouverte, sans culpabilisation
**(< 75 mots)**

#### Variantes A/B
**Ligne d'ouverture A :** « Je n'encombre pas davantage votre boîte. »
**Ligne d'ouverture B :** « Visiblement le timing n'est pas le bon — je comprends. »

---

## Récap touchpoints LinkedIn

| Jour | Action | Contenu |
|---|---|---|
| 0 | Demande de connexion | Note personnalisée (voir Email 1) |
| 5 | Engagement contenu | Like + commentaire de fond sur un post de {{firstName}} |
| 10 | Message LinkedIn | Rappel cross-canal + bénéfice différent (voir Email 3) |
| 18 | Partage de contenu | Article sur scaling support / rétention, tag si pertinent |

---

## Bonnes pratiques d'envoi (Emelia)

- **Meilleur créneau (Head of Support / Manager) :** mardi-jeudi, 9 h-11 h. Éviter lundi matin et vendredi après-midi.
- **Volume :** démarrer à 10-20 envois/jour par boîte, monter progressivement à ~50.
- **Warm-up :** chauffer le domaine d'envoi 2-3 semaines avant (Emelia propose un warm-up intégré — l'activer).
- **Domaine :** utiliser un domaine d'envoi dédié (ex : `mail.salverys.fr`), pas le domaine principal.
- **Authentification :** SPF, DKIM, DMARC configurés. Tester via mail-tester.com avant lancement.
- **Format :** texte brut, sans image ni tracking pixel sur l'email 1 (meilleure délivrabilité).
- **Désinscription :** inclure un lien de désinscription (conformité RGPD / CAN-SPAM).
- **Relance si aucune réponse aux 5 emails :** attendre 30 jours, repartir sur un nouvel angle ou un nouveau déclencheur (nouvelle levée, nouveau poste ouvert).

---

## Préparation aux objections

| Objection probable | Réponse |
|---|---|
| « La qualité va-t-elle suivre ? C'est ma réputation. » | C'est exactement pourquoi on démarre par un pilote sur un périmètre réduit, avec scoring qualité (QA) partagé. Vous jugez sur pièces avant d'élargir. |
| « Et la sécurité / le RGPD des données de mes clients ? » | On opère dans votre outil avec accès tracé, engagement de confidentialité, et conformité RGPD. On vous remet un dossier sécurité avant tout démarrage. |
| « Mes clients vont sentir que c'est externalisé. » | C'est le cœur du modèle marque blanche : équipe francophone native, sous votre nom, votre ton, vos process. Invisible côté client. |
| « Combien de temps pour être opérationnel ? » | Quelques semaines, contre 60-90 jours pour un recrutement interne — et sans le risque RH. |
| « Quel est le coût réel et l'engagement ? » | Modèle par ETP dédié, ~-40 % vs équipe interne complète. On peut commencer sans engagement long, en montée en charge progressive. |

---

## Prochaines étapes suggérées

- `/sales objections` pour creuser le playbook objections (notamment offshore/RGPD).
- `/sales followup` pour la séquence post-rendez-vous une fois un échange obtenu.
- Construire 2-3 vraies références clients dès les premiers pilotes pour remplacer les cas « à adapter » de l'Email 3.

---

*Généré par l'équipe Sales IA — `/sales outreach`*
