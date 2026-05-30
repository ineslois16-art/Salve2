# PRICING.md — Grille tarifaire & modèle d'offre Salverys

> **Source unique de vérité prix.** Tout chiffre tarifaire dans les emails, le CRM,
> les simulateurs et le site doit être aligné sur ce fichier. En cas de divergence,
> **ce fichier fait foi.**
>
> Dernière révision : 2026-05-30 · Branche `claude/salverys-pricing-strategy-ZMff3`
> Rapport de réflexion détaillé : `RAPPORT-PRIX.html`

---

## 0. Principes

- **Affichage hybride** : grille **médical publique** (site + simulateur), grilles
  **bailleurs et SaaS/helpdesk en interne** (section §3-§4, ne pas publier).
- **Forfait, pas à l'appel** côté client (prévisibilité). Le « à l'appel » ne sert
  qu'en référence interne de coût.
- **-40 %** = claim public **conservateur et défendable** (cf. §5). L'économie réelle
  vs un ETP interne plein est supérieure, mais on annonce -40 % pour rester crédible.
- **Marque blanche systématique** : l'équipe répond sous le nom du client.
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

## 3. Bailleurs sociaux & grandes structures (priorité 2) — **INTERNE**

> Ne pas publier. Positionnement = **capacité d'appoint** (débordement du CRC), pas
> remplacement. Toujours présenté en sur-devis dans la copy commerciale.

- **Modèle** : forfait mensuel de **capacité réservée** (enveloppe d'appels de
  débordement) OU **ETP mutualisé** dédié aux pics.
- **Références internes de chiffrage** (plancher de négociation, ne pas descendre en dessous) :
  - Tarif de référence : **~1,20 à 1,80 €/appel traité** (selon complexité/horaires).
  - Forfait capacité dédiée : **~1 800 à 3 500 €/mois** par tranche d'ETP réservé.
- **Pilote** : sur **1 pic prévisible** (rentrée, hiver, période de charges), facturé
  au forfait selon l'enveloppe — **pas de pilote gratuit** sur ce segment (volumes trop
  lourds pour 10 agents).
- **KPI engagés** : taux de décroché, taux d'abandon, délai moyen, NPS.

---

## 4. Support N1 SaaS & Helpdesk IT (priorité 3) — **INTERNE**

> Ne pas publier. Modèle **ETP dédié** en marque blanche.

- **Tarif ETP dédié (référence interne)** :
  - Support N1 SaaS : **~1 900 à 2 400 €/mois par ETP** (≈ 90-115 €/jour).
  - Helpdesk IT N1 (profils ITIL) : **~2 200 à 2 800 €/mois par ETP** (≈ 105-135 €/jour).
  - Cohérent avec **-40 %** vs un CDI FR chargé (~3 200-3 800 €/mois — cf. §5).
- **Durée de contrat (révisée pour réduire la friction d'entrée)** :
  - **Engagement initial 3 mois** (cadrage + montée en charge), puis **12 mois
    renouvelable**.
  - 24-36 mois réservés aux grands comptes **avec dégressif tarifaire** négocié.
  - ⚠️ La copy actuelle dit « contrats 12 à 36 mois » → à reformuler en « à partir de
    3 mois, puis 12 mois renouvelable » pour abaisser la barrière.
- **Pilote** : 15 jours sur périmètre cadré (~80 tickets) — **à repositionner** comme
  « 1er mois à -50 % » si l'étude §7 le valide aussi sur ce segment (sinon pilote court
  facturé symboliquement).

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
