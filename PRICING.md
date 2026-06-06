# PRICING.md — Grille tarifaire & modèle d'offre Salverys

> **Source unique de vérité prix.** Tout chiffre tarifaire dans les emails, le CRM,
> les simulateurs et le site doit être aligné sur ce fichier. En cas de divergence,
> **ce fichier fait foi.**
>
> Dernière révision : 2026-06-06 (ajout §7 « engagement de décroché ») · base 2026-05-30 · Branche `claude/salverys-pricing-strategy-ZMff3`
> Rapport de réflexion détaillé : `RAPPORT-PRIX.html`

---

## 0. Principes

- **Affichage des prix — règle à 3 paliers** (grille de décision détaillée en §9) :
  - **Médical standard** → **public**, grille ferme + simulateur (350/590/950).
  - **Support N1 & Helpdesk IT en direct** → **estimation publique sans prix ferme** : simulateur en
    **fourchette** + « devis sous 24 h » (capture lead). Pas de tarif ETP exact affiché.
  - **Toute marque blanche** (médical, support, helpdesk) → **jamais publique** : le prix de gros est
    l'input de marge du revendeur. Bailleurs → interne (§4).
- **Forfait, pas à l'appel** côté client (prévisibilité). Le « à l'appel » ne sert
  qu'en référence interne de coût.
- **-40 %** = claim public **conservateur et défendable** (cf. §5). L'économie réelle
  vs un ETP interne plein est supérieure, mais on annonce -40 % pour rester crédible.
- **Marque blanche systématique** : l'équipe répond sous le nom du client. Deux
  go-to-market chiffrés : **en direct** (client final) ou **en marque blanche** comme
  sous-traitant d'un acteur déjà établi (ESN, prestataire BPO) — qui prend une marge de
  **~25-35 %**, donc on capte moins par unité mais avec un coût d'acquisition ~nul.
- **Modèles de tarification retenus (par ordre de préférence)** : **1) ETP par position ·
  2) à l'heure · 3) à l'interaction**. (Le forfait médical public est un packaging d'ETP.)
- **SaaS-first** : aucun encaissement maison. Outil de facturation à trancher (§6).

---

## 1. Médical — télésecrétariat (priorité 1) — **GRILLE PUBLIQUE**

Facturation au **forfait mensuel** selon le volume d'appels. Dépassement = bascule
au palier supérieur, **jamais de surfacturation à l'appel**.

| Forfait | Volume inclus | Prix mensuel |
|---|---|---|
| **Essentiel** | jusqu'à ~250 appels/mois | **350 €** |
| **Confort** | jusqu'à ~500 appels/mois | **590 €** |
| **Intensif** | jusqu'à ~900 appels/mois | **950 €** |
| **Sur-mesure** | > 900 appels/mois | sur devis |

- Couverture **8h-20h**, 5j/7 minimum (soir/week-end en option sur-mesure).
- Intégration **Doctolib / Maiia / Médistory / Cegedim**.
- **Prix fermes** (alignés marché FR 2025 : forfaits 300-900 €/mois temps plein — cf.
  §5). On retire la mention « indicatifs à valider ».
- **Offre de lancement** : voir §7 (1er mois à -50 %).

---

## 2. Médical — pas de palier d'entrée bas (décision)

Un forfait « Starter » < 350 € a été écarté pour l'instant : marge trop fine vs coût
de setup, et risque de tirer le positionnement vers le bas. Les très petits cabinets
sont adressés par l'offre de lancement (-50 % le 1er mois) plutôt qu'un prix plancher.

---

## 3. Support N1 SaaS & Helpdesk IT (priorité 2) — **INTERNE**

> Ne pas publier. Deux GTM : **en direct** (client final) ou **en marque blanche**
> (sous-traitant d'un acteur établi). Modèle **ETP dédié** en marque blanche.

**Modèles de tarification retenus (par ordre de préférence)**
1. **ETP par position** (seat dédié) — modèle principal.
2. **À l'heure** — périmètres variables / débordement.
3. **À l'interaction** (par ticket) — volumes mesurables.

**Tarif ETP par position (référence interne, €/mois/ETP)**

| Segment | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| Support N1 SaaS | 1 900 - 2 400 € | 1 350 - 1 700 € |
| Helpdesk IT N1 (ITIL) | 2 200 - 2 800 € | 1 550 - 2 000 € |

\* Le donneur d'ordre établi prend ~25-35 % de marge : on capte moins par ETP, mais le
coût d'acquisition est ~nul et le volume est apporté. **Plancher absolu** : jamais sous
le coût chargé agent + ~20 % (cf. §7).

- **À l'heure** : ~12-15 €/h (direct) · ~8-11 €/h (marque blanche).
- **À l'interaction** : ~2,5-4 €/ticket N1 (direct) · ~1,8-2,8 € (marque blanche).
- **Benchmark interne (coût à battre côté client)** : un CDI FR chargé = ~38-46 k€/an,
  soit **~3 200-3 800 €/mois** (cf. §5). Notre ETP **direct** vise **-40 % minimum**.
- **Durée de contrat (révisée)** : engagement initial **3 mois**, puis **12 mois
  renouvelable** ; 24-36 mois réservés aux grands comptes avec dégressif.
  ⚠️ La copy dit « contrats 12 à 36 mois » → reformuler en « dès 3 mois, puis 12 mois ».
- **Pilote** : 15 j cadré (~80 tickets) → repositionner en « 1er mois -50 % » si validé.

---

## 4. Bailleurs sociaux & grandes structures (priorité 3) — **INTERNE**

> Ne pas publier. Positionnement = **capacité d'appoint** (débordement du CRC), pas
> remplacement. Toujours présenté en sur-devis. Deux GTM : direct ou marque blanche.

**Modèles de tarification retenus (même ordre de préférence)**
1. **ETP par position** (mutualisé sur les pics).
2. **À l'heure**.
3. **À l'interaction** (par appel traité).

**Références internes de chiffrage**

| Modèle | En direct | En marque blanche (sous-traitant)* |
|---|---|---|
| ETP / capacité réservée (€/mois) | 1 800 - 3 500 € | 1 300 - 2 500 € |
| À l'appel traité | 1,20 - 1,80 € | 0,90 - 1,40 € |

\* Marge donneur d'ordre ~25-35 %. **Plancher** : coût chargé agent + ~20 %.

- **Pilote** : sur **1 pic prévisible** (rentrée, hiver, période de charges), facturé
  au forfait selon l'enveloppe — **pas de pilote gratuit** (volumes trop lourds pour
  10 agents).
- **KPI engagés** : taux de décroché, taux d'abandon, délai moyen, NPS.

---

## 5. Benchmarks RH France (révisés & sourcés) — argumentaire coût

> Chiffres **révisés à la baisse** vs l'ancienne copy, pour rester **défendables**.
> Méthode : brut moyen marché × charges patronales (~+42 %) + poste de travail +
> formation + coût de turnover/recrutement amortis.

| Poste | Ancienne copy | **Nouveau repère** | Base de calcul |
|---|---|---|---|
| Secrétaire médicale (interne) | 35-45 k€/an | **33 à 40 k€/an** | ~1 925 €/brut/mois ⇒ ~32,8 k€ coût employeur + poste/formation/turnover |
| Téléconseiller CDI (CRC) | 48-55 k€/an | **38 à 46 k€/an** | ~21 900 €/brut/an ⇒ ~31 k€ coût employeur + encadrement + turnover ~25 %/an |

- Délai de recrutement conservé : **60 à 90 jours**.
- Turnover CRC conservé : **~25 %/an**.
- **Sources marché 2025** (à citer dans le rapport) : forfaits télésecrétariat FR
  300-900 €/mois ; salaires Indeed/Talent.com/HelloWork ; modèles BPO (per-seat/FTE,
  per-minute, per-ticket).

**Calcul du -40 % (défendable)** : un forfait Confort (590 €/mois ≈ 7,1 k€/an) face à
une secrétaire interne (~33-40 k€/an) représente une économie bien supérieure à 40 %.
On annonce **-40 %** parce que le client compare souvent à un **mi-temps** ou à un
**appoint**, pas à un ETP plein — c'est le scénario où -40 % est exact et incontestable.

---

## 6. Facturation / encaissement (SaaS-first) — **décision reportée**

Comparatif documenté dans `RAPPORT-PRIX.html`. Aucun outil figé à ce stade.

| Critère | Stripe Billing + SEPA | GoCardless | Pennylane |
|---|---|---|---|
| Abonnement récurrent | ✅ natif | ✅ natif | ⚠️ via module |
| Prélèvement SEPA B2B FR | ✅ | ✅ (spécialiste) | ✅ |
| CB / self-service | ✅ fort | ⚠️ limité | ⚠️ |
| Compta/facturation FR | ⚠️ à coupler | ❌ | ✅ intégré (expert-comptable) |
| Mise en route | rapide | rapide | moyenne |

Critère de choix : si priorité **encaissement récurrent automatisé** → Stripe ou
GoCardless ; si priorité **facturation + compta FR intégrée** → Pennylane + un PSP.

---

## 7. Offre de lancement — **1er mois à -50 %** (remplace l'essai gratuit)

**Décision : remplacer « essai 15 jours gratuit » par « 1er mois à -50 % ».**
Validé par l'étude de rentabilité ci-dessous. Repli si friction commerciale trop forte
en cold : « 7 jours offerts, périmètre limité » (lève au passage l'incohérence 15j/7j).

### Étude de rentabilité (capacité = ressource rare à 10 agents)

**Hypothèses**
- Coût agent chargé (Madagascar, tout compris) : **~700 €/mois**.
- 1 télésecrétaire couvre **~6 cabinets Essentiel** simultanément (appels intermittents)
  ⇒ coût de service **~117 €/client/mois**.
- Coût de setup/onboarding par nouveau client : **~40 €** (paramétrage, formation logiciel).
- Forfait de référence Essentiel : **350 €/mois**.

**Comparaison sur le mois d'acquisition**

| Scénario | Revenu mois 1 | Coût service + setup | Marge mois 1 | Mois suivants |
|---|---|---|---|---|
| Essai 15j **gratuit** | 0 € | ~117/2 + 40 ≈ **98 €** | **−98 €** | +233 €/mois |
| **1er mois −50 %** | **175 €** | ~117 + 40 ≈ **157 €** | **+18 €** | +233 €/mois |

**Sensibilité (cas pessimiste : 1 agent = 4 cabinets ⇒ service ~175 €/client)**
- 1er mois -50 % : 175 € revenu − 175 € service − 40 € setup ≈ **−40 €** (négligeable,
  une seule fois). Essai gratuit : **−215 €**. → le -50 % reste nettement supérieur.

**Conclusion : 1er mois -50 % VALIDÉ.**
1. Transforme le mois d'acquisition de **négatif → ~équilibre** (cash positif).
2. **Protège la capacité rare** (agents + bande passante d'onboarding) — contrainte
   n°1 à 10 agents.
3. Garde un message **« sans risque »** fort (demi-tarif, sans engagement, résiliable).
4. **Filtre les non-sérieux** (engagement de paiement = signal d'intention) ⇒ meilleur
   taux de conversion qu'un essai 100 % gratuit.

### Engagement de décroché (réassurance en régime, décidée 2026-06-06)

Le mois pilote -50 % couvre la réassurance **« essayer sans risque »**. Une **seconde**
réassurance s'applique **une fois le service en régime** (intégration stabilisée), **sans
remboursement cash** :

- **Engagement** : viser **≥ 95 % d'appels patients décrochés** sur les plages couvertes
  (8h-20h), dans la limite du volume du forfait souscrit.
- **Remède si le seuil n'est pas atteint sur un mois civil** : **avoir de 20 %** sur la
  facture du mois suivant, **automatique** (le client n'a pas à le réclamer). **Pas de
  remboursement en cash** — un avoir protège la trésorerie et favorise la rétention.
- **Conditions de défense** (anti-abus / risque non maîtrisé) : mesuré sur les **appels
  présentés** pendant les plages couvertes ; **hors débordement** au-delà du forfait
  (un dépassement = bascule palier, pas une pénalité) ; **hors indisponibilités côté
  client** (ligne, logiciel, coupure). Périmètre et seuil **figés au cadrage**.
- **Pourquoi pas pendant le mois pilote** : durant l'onboarding (paramétrage, formation),
  le décroché n'est pas encore stabilisé — l'engagement ne court qu'à partir du **1er mois
  plein en régime**. Le pilote reste couvert par le « sans engagement ».
- **Seuil** : 95 % est ambitieux ; **repli défendable 90 %** si les premiers mois réels
  le justifient. Plafond du remède gelé à **20 % d'avoir** quelle que soit l'ampleur du
  manqué (protège la marge).

**Garde-fou** : si le taux réponse→souscription en cold s'effondre vs l'essai gratuit,
basculer sur le repli « 7 jours offerts, périmètre limité ».

---

## 8. Récapitulatif des changements à propager

| Élément | Avant | Après |
|---|---|---|
| Essai | « 15 jours gratuit » / « 7 jours » (incohérent) | **« 1er mois à -50 % »** (repli : 7j offerts cadrés) |
| Secrétaire médicale (benchmark) | 35-45 k€/an | **33-40 k€/an** |
| Téléconseiller CDI (benchmark) | 48-55 k€/an | **38-46 k€/an** |
| Grille médical | « indicatifs à valider » | **prix fermes** (350/590/950 + sur-devis) |
| Contrats helpdesk | « 12 à 36 mois » | **« dès 3 mois, puis 12 mois renouvelable »** |
| Grilles bailleurs / SaaS-helpdesk | éparses en email | **centralisées ici (interne)** |
| Priorités niches | Bailleurs n°2, SaaS/Helpdesk n°3 | **SaaS/Helpdesk n°2, Bailleurs n°3** |
| Modèles de tarification | implicites | **ETP/position > à l'heure > à l'interaction** |
| Go-to-market | direct uniquement | **direct + marque blanche (sous-traitance)** |
| Affichage public | « hybride » (médical public, reste interne) | **3 paliers (§9)** : médical public ferme · support/helpdesk **direct = estimation** · **toute MB jamais publique** |
| Simulateurs IT (helpdesk/informatique) | prix **ETP marque blanche** affiché publiquement (fuite de marge) | **estimation directe (fourchette)** + « devis sous 24 h », chiffres MB retirés |

---

## 9. Affichage public des prix — grille de décision (synthèse)

Système de points (8 critères pondérés, max 50). Détail et interprétation dans `RAPPORT-PRIX.html §9`.

| Segment | Score /50 | % | Décision |
|---|---|---|---|
| Médical — standard | 45,5 | 91 % | **Afficher** (grille ferme + simulateur) |
| Support N1 — standard (direct) | 31 | 62 % | **Estimation** sans prix ferme + capture lead |
| Helpdesk IT — standard (direct) | 29,5 | 59 % | **Estimation** sans prix ferme + capture lead |
| Médical — marque blanche | 22,5 | 45 % | **Jamais public** |
| Support N1 — marque blanche | 17,5 | 35 % | **Jamais public** |
| Helpdesk IT — marque blanche | 17,5 | 35 % | **Jamais public** |

**3 paliers** : ≥70 % = grille ferme publique · 50-69 % = estimation (fourchette) sans prix ferme +
« devis sous 24 h » · <50 % = jamais public. **Ligne de fracture = 2 axes** : direct vs marque blanche
(toute MB privée, conflit de marge) ET produit packagé vs ETP sur-mesure.

---

## 10. Modèle d'exécution & infra (freelance / BYOD, SaaS-first)

> Réflexe : **SaaS-first**, aucune infra télécom maison. Le modèle **freelances + équipes dédiées** est
> viable sous conditions. Détail (tableaux par domaine) dans `RAPPORT-PRIX.html §10`.

- **Infra transversale** : VoIP cloud (Aircall/Ringover/3CX, pas de standard physique) ; **double FAI +
  4G backup + onduleur/groupe électrogène** (point dur Tana) ; gouvernance d'accès (comptes nommés, MFA,
  **zéro download**) ; RGPD art. 28 (DPA, registre) ; WFM/Erlang ; QA/double écoute ; **backfill +1
  agent/compte** ; documentation écrite dès le client n°1.
- **BYOD freelance & santé** : viable façon **SECRETEL** — l'agent consulte des **SaaS HDS dans un
  navigateur** (Doctolib Pro → Ubicentrex) ; les données restent chez l'hébergeur HDS, jamais sur le
  poste ; Salverys est **sous-traitant (art. 28)**, pas hébergeur. Le VDI strict ne devient nécessaire que
  pour un **logiciel lourd installé** (ex. Médistory local).
- **Angle mort** : disponibilité garantie ≠ freelance pur → cadrer juridiquement + backfill.
