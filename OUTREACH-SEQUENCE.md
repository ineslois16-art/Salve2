# Playbook Cold Outreach Salverys — séquences par niche

Ce document est la **source unique** des séquences cold mail Salverys. Les
campagnes sont exécutées dans **Emelia**. Le CRM (`CRM_Salverys.html`) sert au
pipeline post-réponse, aux décideurs vérifiés et aux scripts d'appel — pas à
l'envoi des séquences.

**Outil d'envoi :** Emelia (mail-merge CSV)
**Date :** 2026-05-30
**Niches couvertes :**
1. **Télésecrétariat médical** — priorité absolue (séquence détaillée ci-dessous)
2. **Support N1 — Éditeurs SaaS FR** — niche tertiaire (séquence existante, voir plus bas)

---

## Canaux & CTA — principes communs

À appliquer à toute séquence cold mail, quelle que soit la niche.

### CTA soft, jamais de lien de réservation en cold

Chaque email finit par **une question oui/non**. Jamais de bouton « réserve un
call ». Le clic sur un lien Calendly en cold tourne autour de 0,3 à 1 % — la
réponse à une question simple est plusieurs fois supérieure.

### Délivrabilité : zéro lien dans les emails 1 à 3

Les liens trackés dans les premiers emails à froid signalent « mailing de masse »
aux filtres anti-spam et plombent la délivrabilité.

- **Emails 1, 2, 3 :** aucun lien. Pas de Calendly, pas de WhatsApp, pas de
  site, pas d'image. Le **domaine du site** apparaît uniquement en signature
  (texte brut, ex. `salverys.fr`).
- **Emails 4, 5 :** le numéro WhatsApp peut apparaître **en texte brut** (pas de
  lien `wa.me`), idem pour le site.
- **Toujours :** pas d'emoji ni de gras dans le corps. Texte brut intégral.

### WhatsApp = canal de bascule APRÈS la première réponse

WhatsApp n'apparaît jamais comme un **lien cliquable** en cold (`wa.me/...`
dégrade la délivrabilité). Le pivot se fait dès qu'un prospect répond :

> « Pour simplifier, on peut continuer par WhatsApp ? +33 X XX XX XX XX »

Côté CRM, mettre le statut du lead à `contacté` puis `rdv` selon l'issue, et
passer le canal sur `WhatsApp`.

### Live chat du site = preuve de réactivité

Le live chat opéré par Salverys sur son propre site est une **démonstration en
direct** du service de télésecrétariat. Il se mentionne **verbalement** dans
l'email 3 (« vous pouvez tester notre réactivité en direct sur notre site »)
sans l'URL — l'URL ne paraît qu'en signature.

### Cadence et A/B testing

5 emails sur 21 jours : **J1 / J3 / J7 / J14 / J21**. Deux variantes d'objet
(A/B) par email. < 100 mots (E5 < 75). Une seule idée par email.

---

## Variables Emelia (CSV)

Communes à toutes les niches sauf mention contraire.

| Variable | Contenu | Source |
|---|---|---|
| `{{firstName}}` | Prénom du contact | Décideur vérifié dans le CRM |
| `{{structure}}` | Nom du cabinet / chaîne / éditeur | CRM |
| `{{ville_dept}}` | Ville ou département | CRM (`notes` ou `structure`) |
| `{{accroche_perso}}` | La phrase de personnalisation déclencheur | **Obligatoire** — 30 s de recherche par prospect |
| `{{signature}}` | Bloc signature Salverys | Pré-défini |
| `{{outil_ticketing}}` *(SaaS uniquement)* | Zendesk / Intercom / Freshdesk | Page « carrières » du poste support |
| `{{secteur}}` *(SaaS uniquement)* | Verticale du SaaS | Site éditeur |

> Sans `{{accroche_perso}}` rempli, l'email 1 devient générique. **Ne pas
> lancer la campagne** avec cette colonne vide.

---

# 1. Télésecrétariat médical (priorité ICP)

**Segment cible**
- **Priorité 1 :** chaînes / réseaux multi-sites (3+ centres) — dentaire,
  ophtalmo, radiologie, kiné, ostéo.
- **Priorité 2 :** cabinets de groupe (4+ praticiens) avec secrétariat saturé.

**Persona principal**
- Chaînes : **directrice/directeur d'exploitation**, responsable opérationnel
  des centres, responsable accueil/secrétariat groupe.
- Cabinets de groupe : praticien associé qui gère l'administratif (gérant,
  cogérant) — pas le DG/fondateur.

**Décideur secondaire (escalade) :** fondateur / DG / président.

**Hors cible (à ne pas démarcher)**
- Praticien solo en libéral (volume trop faible, autogestion + Doctolib).
- Cabinet déjà équipé d'un BPO interne dédié (cas Dentego/Adental — angle
  débordement seulement).
- CHU / hôpital public (marchés publics).

---

## Recherche de personnalisation (à remplir dans `{{accroche_perso}}`)

Quatre déclencheurs à chercher (30 s par prospect, prioriser le n°1).

1. **Avis Google « injoignable »** — Qualité : Hot
   *Angle :* « Plusieurs avis récents de patients de {{structure}} signalent
   qu'ils n'arrivent pas à joindre votre secrétariat. »
2. **Offre d'emploi « secrétaire médicale » récente** (Indeed, France Travail,
   site cabinet) — Qualité : Hot
   *Angle :* « J'ai vu que {{structure}} cherche une secrétaire médicale depuis
   quelques semaines. »
3. **Multi-sites / nouvelle ouverture** — Qualité : Warm
   *Angle :* « Avec {{X}} centres ouverts, gérer la centralisation des appels
   patients devient un sujet. »
4. **Désert médical** (zones rurales, Creuse / Ariège / Lot / Cantal…)
   — Qualité : Warm
   *Angle :* « Dans {{ville_dept}}, la pression sur les médecins libéraux ne
   laisse plus le temps de gérer le téléphone. »

**Angle d'ouverture préféré :** déclencheur entreprise (avis ou offre d'emploi).
**Angle secondaire (relances) :** coût d'une secrétaire interne, qualité de
l'accueil, image de la structure.

---

## Séquence 5 emails

### Email 1 — L'accroche (Jour 1)

**Objet A :** {{firstName}}, vos appels patients sonnent dans le vide ?
**Objet B :** secrétariat pour {{structure}}

---

Bonjour {{firstName}},

{{accroche_perso}}

Beaucoup de cabinets en {{ville_dept}} perdent des patients faute de pouvoir décrocher pendant les consultations — et un patient qui n'a pas pu être rappelé prend le suivant qui répond.

Chez Salverys, on opère une équipe française d'origine, formée à Doctolib / Maiia / Médistory, qui prend vos appels sous le nom de {{structure}} : prise de RDV directe dans votre agenda, transfert d'urgence si vous êtes demandé. À environ -40 % du coût d'une secrétaire interne, sans charge RH.

Ça vaudrait un échange de 15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 5) :** **appel téléphonique court** (utiliser
le script `CALL_SCRIPTS.telemed.opening` dans le CRM). LinkedIn optionnel pour
les chaînes multi-sites (le décideur opérationnel y est).

#### Variantes A/B
**Ligne d'ouverture A (déclencheur perso) :** `{{accroche_perso}}`
**Ligne d'ouverture B (sectorielle) :** « En cabinet de groupe, 3 à 5 appels
patients par jour finissent en répondeur — c'est rarement la faute du
secrétariat, c'est un problème de capacité. »

---

### Email 2 — La valeur (Jour 3)

**Objet A :** le vrai coût d'une secrétaire à plein temps
**Objet B :** 60 jours pour recruter, vs…

---

Bonjour {{firstName}},

Un repère qui revient chez les cabinets qu'on accompagne : une secrétaire médicale en interne, en coût complet (salaire + charges + congés + formation au logiciel + turnover), tourne autour de 35 à 45 k€ par an équivalent temps plein. Et le recrutement prend 60 à 90 jours, avec un turnover régulier à refaire.

Pas de demande aujourd'hui — juste un repère utile si vous arbitrez entre interne et externe pour {{structure}} sur 2026.

{{signature}}

---

**CTA :** zéro (apport de valeur pur)
**Touchpoint complémentaire :** aucun à ce stade — laisser respirer.

#### Variantes A/B
**Ligne d'ouverture A :** « Un repère qui revient chez les cabinets qu'on accompagne… »
**Ligne d'ouverture B :** « Petit chiffre qui surprend souvent les praticiens associés… »

---

### Email 3 — Le cadrage honnête + preuve réactivité (Jour 7)

**Objet A :** comment on prendrait vos appels
**Objet B :** testez notre réactivité en direct

---

Bonjour {{firstName}},

Salverys démarre — donc plutôt qu'un faux cas client, je préfère vous décrire ce que ça donnerait pour {{structure}}.

Votre standard est basculé vers nous selon vos horaires. On répond sous votre nom, on prend les RDV directement dans votre Doctolib (ou Maiia / Médistory), on filtre les urgences et on transfère si vous êtes demandé. Vous gardez la main sur les agendas.

Avant tout échange, vous pouvez tester notre réactivité : un chat en direct est ouvert sur notre site (en signature). Posez une question, vous verrez le délai.

15 min cette semaine ?

{{signature}}

---

**CTA :** soft, question
**Touchpoint complémentaire (Jour 12) :** **2e tentative d'appel** si pas de
réponse (script `CALL_SCRIPTS.telemed.qualif`).

#### Variantes A/B
**Ligne d'ouverture A :** « Salverys démarre — donc plutôt que de vous sortir un cas client… »
**Ligne d'ouverture B :** « Une question revient souvent à ce stade : comment ça se passe concrètement ? »

> Note : on remplacera ce cadrage par un vrai cas client dès qu'un premier
> cabinet pilote sera signé. Ne jamais inventer une référence.

---

### Email 4 — L'angle marque blanche + pilote (Jour 14)

**Objet A :** vos patients ne verront pas la différence
**Objet B :** essai 15 jours sans engagement

---

Bonjour {{firstName}},

Jusqu'ici je vous ai parlé fonctionnement et coût. L'autre sujet pour {{structure}}, c'est l'image perçue par vos patients.

Notre modèle est marque blanche : équipe française d'origine, sous votre nom, vos process, votre ton. Le patient pense parler à votre secrétariat.

Pour limiter le risque, on peut démarrer par un essai de 15 jours sans engagement, sur un périmètre réduit (un site, certains créneaux). Vous jugez la qualité avant d'élargir.

Si l'email n'est pas le plus simple, on peut aussi en parler par WhatsApp au +33 X XX XX XX XX.

Ouvert à en parler ?

{{signature}}

---

**CTA :** soft, question + canal optionnel (WhatsApp en texte brut)
**Touchpoint complémentaire :** aucun.

#### Variantes A/B
**Ligne d'ouverture A (marque) :** « Jusqu'ici je vous ai parlé fonctionnement et coût. L'autre point, c'est l'image… »
**Ligne d'ouverture B (risque) :** « Une objection légitime : et si la qualité ne suit pas ? D'où notre approche par essai 15 jours. »

> Remplacer `+33 X XX XX XX XX` par le numéro WhatsApp Business Salverys avant
> lancement.

---

### Email 5 — Le breakup (Jour 21)

**Objet A :** je referme la boucle
**Objet B :** ce n'est peut-être pas le moment

---

Bonjour {{firstName}},

Je n'encombre pas davantage votre boîte. Le sujet — répondre à 100 % des appels patients sous votre nom, à -40 % du coût d'une secrétaire interne — sera là quand il deviendra prioritaire pour {{structure}}.

Si c'est le cas, répondez simplement à ce mail, ou écrivez-nous sur WhatsApp au +33 X XX XX XX XX.

Bonne continuation à vous et à l'équipe.

{{signature}}

---

**CTA :** porte ouverte, sans culpabilisation. WhatsApp en option (texte brut).
**(< 75 mots)**

#### Variantes A/B
**Ligne d'ouverture A :** « Je n'encombre pas davantage votre boîte. »
**Ligne d'ouverture B :** « Visiblement le timing n'est pas le bon — je comprends. »

---

## Récap touchpoints téléphone (médical)

| Jour | Action | Script CRM |
|---|---|---|
| 1 | Email 1 — accroche | — |
| 3 | Email 2 — valeur | — |
| 5 | Appel téléphonique court | `CALL_SCRIPTS.telemed.opening` |
| 7 | Email 3 — cadrage + live chat | — |
| 12 | 2e tentative d'appel | `CALL_SCRIPTS.telemed.qualif` |
| 14 | Email 4 — marque blanche | — |
| 21 | Email 5 — breakup | — |

LinkedIn (optionnel) : pour les chaînes multi-sites uniquement (Dentego, IK
Paris, Dentelia…), le décideur opérationnel y est. Pour les cabinets de groupe,
LinkedIn n'apporte rien.

---

## Traitement des réponses (toutes niches)

Dès qu'un prospect répond, basculer sur le **canal le plus simple pour lui** —
en pratique : WhatsApp ou appel rapide.

1. **Réponse positive ou question** :
   - CRM : passer le lead de `contacté` à `rdv` si un créneau est posé,
     sinon laisser `contacté` et mettre une note.
   - Canal : « Pour simplifier, on continue par WhatsApp ? +33 X XX XX XX XX »
     ou proposer un appel de 15 min dans la foulée.
2. **Réponse négative / pas le moment** :
   - CRM : `perdu` avec note sur le motif (mauvais timing, déjà équipé, hors
     ICP). Si « pas le moment », planifier une tâche de relance à J+90 avec
     un nouvel angle (nouvelle ouverture, nouveau poste ouvert…).
3. **Out-of-office / pas le bon interlocuteur** :
   - CRM : mettre à jour le décideur dans la fiche lead. Recommencer la
     séquence pour le bon contact (en marquant que ce n'est plus un cold).

---

## Objections (médical)

Réutiliser les arbres `OBJECTIONS_TELEMED` du CRM (`CRM_Salverys.html`, section
COLD CALLING). Les 5 objections principales :

| Objection | Réponse courte |
|---|---|
| « Mes patients vont sentir que c'est externalisé » | Équipe française d'origine, sous votre nom, vos process. Patients entendent votre secrétariat — pas Salverys. |
| « C'est combien ? » | Forfait selon volume d'appels, à partir de ~350 €/mois. ~40 % moins cher qu'une secrétaire interne complète. |
| « Et les urgences ? » | Filtrage selon vos règles : transfert d'appel si vous êtes demandé, sinon RDV calé. Vous gardez la main. |
| « J'ai déjà une secrétaire » | Pas pour la remplacer — pour absorber le débordement (pics, congés, hors heures). |
| « Sécurité des données patients ? » | RGPD, accès tracé, engagement de confidentialité, dossier sécurité avant tout démarrage. |

---

# 2. Support N1 — Éditeurs SaaS FR (niche tertiaire)

> Cette séquence existe depuis le 27/05/2026 et reste fonctionnelle. Elle sera
> alignée plus tard sur le principe « Canaux & CTA » ci-dessus (mention
> WhatsApp / live chat). Pour l'instant, traiter cette niche en priorité basse.

**Segment cible :** éditeurs SaaS B2B français, 20-300 salariés, en croissance
**Persona :** Head of Support / Customer Support Manager / Responsable Relation Client
**Décideur secondaire :** COO / Directeur des Opérations
**Framework :** Problème → Preuve → Ask

### Recherche de personnalisation (niveau segment)

**Déclencheurs entreprise :**
1. Poste « Support N1 / Customer Care » ouvert depuis > 1 mois — Qualité : Hot
2. Levée de fonds < 12 mois — Qualité : Warm
3. Avis clients (Trustpilot/G2) sur les délais de réponse — Qualité : Warm

**Déclencheurs sectoriels :**
1. 89 % des éditeurs de logiciels en difficulté de recrutement (vs 78 % il y a 2 ans)
2. Recrutement interne = 60-90 jours vs équipe externe en quelques semaines
3. Pression de rentabilité post-levée → marge support scrutée

### Séquence 5 emails (résumé)

| Email | Jour | Angle | CTA |
|---|---|---|---|
| 1 | J1 | Accroche + problème chiffré (89 %) + -40 % du coût | « Ça vaudrait un échange de 15 min ? » |
| 2 | J3 | Coût complet d'un N1 interne + 60-90 j de recrutement | aucun (valeur pure) |
| 3 | J7 | Preuve sociale / cadrage honnête (cas client OU benchmark) | « Je vous montre comment en 15 min ? » |
| 4 | J14 | Angle marque blanche + offre pilote | « Ouvert à en parler ? » |
| 5 | J21 | Breakup, porte ouverte | répondez simplement à ce mail |

> Pour le contenu complet des emails SaaS et leurs touchpoints LinkedIn, voir
> l'historique git de ce fichier (avant le 2026-05-30). À ré-injecter ici lors
> de l'alignement sur le principe transverse.

---

# Bonnes pratiques d'envoi (Emelia)

- **Créneau optimal** : mardi-jeudi, 9 h-11 h. Éviter lundi matin et vendredi
  après-midi.
- **Volume** : démarrer à 10-20 envois/jour par boîte, monter progressivement à
  ~50.
- **Warm-up** : chauffer le domaine d'envoi 2-3 semaines avant (Emelia propose
  un warm-up intégré — l'activer).
- **Domaine** : utiliser un domaine d'envoi dédié (ex. `mail.salverys.fr`),
  pas le domaine principal.
- **Authentification** : SPF, DKIM, DMARC configurés. Tester via mail-tester.com
  avant lancement.
- **Format** : texte brut, sans image ni tracking pixel sur l'email 1
  (meilleure délivrabilité).
- **Désinscription** : inclure un lien de désinscription (conformité RGPD /
  CAN-SPAM).
- **Relance si aucune réponse aux 5 emails** : attendre 30 jours, repartir sur
  un nouvel angle ou un nouveau déclencheur (nouvelle ouverture de centre,
  nouveau poste ouvert).

---

# Prochaines étapes suggérées

- **À faire avant lancement médical** : remplir le numéro WhatsApp Business
  Salverys dans les emails 4 et 5 (placeholders `+33 X XX XX XX XX`).
- **Premier pilote signé** : remplacer le cadrage honnête de l'email 3
  (médical) par un vrai cas client (cabinet ou chaîne pilote, métriques avant /
  après).
- **Niche secondaire (bailleurs / organismes)** : construire une séquence
  dédiée ciblant le Directeur de la Relation Client (jamais le DG).
- **Alignement SaaS** : intégrer WhatsApp / live chat dans la séquence SaaS
  existante (priorité basse).

---

*Document maintenu en parallèle du pipeline Emelia. Toute modification doit
être répercutée dans le mail-merge avant le prochain envoi.*
