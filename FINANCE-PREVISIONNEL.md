# FINANCE-PREVISIONNEL.md — Salverys (refait le 2026-06-10)

> **Version refaite from scratch** sur la base : (a) de la grille `PRICING.md` (source de
> vérité prix), (b) des coûts réels du marché malgache documentés dans
> `EVALUATION-STRATEGIQUE-2026-06.md` (recherche web du 2026-06-10, sources citées).
> Simulateur interactif : `tresorerie-salverys.html`.
> Taux : ~5 000 Ar ≈ 1 €. Tous les montants en €/mois sauf mention contraire.

---

## 1. Hypothèses d'équipe (10 personnes)

| Rôle | Effectif | Hypothèse |
|---|---|---|
| Agents productifs (facturables) | **7** | Polyvalents médical / support N1 |
| Superviseur / QA | 1 | Double écoute, reporting, backup d'appoint |
| Direction (commercial + ops) | 2 | Fondateurs, rémunération de lancement modérée |

**Politique salariale premium (décision structurante, cf. évaluation §3.4)** : agents
payés **1 000 000-1 200 000 Ar net (~200-240 €)**, soit 40-70 % au-dessus du marché local
(~700 000 Ar). Objectif : turnover < 10 % vs 15-30 % sectoriel — condition de tenue de la
promesse qualité (90 % décroché, backup +1).

## 2. Structure de coûts mensuelle (base 10 personnes)

| Poste | Détail | €/mois |
|---|---|---|
| Agents (7) | net ~220 € + CNaPS ~13 % + OSTIE ~5 % + primes ⇒ ~280 € chargé | **1 960** |
| Superviseur / QA | profil senior, chargé | 450 |
| Direction (2) | rémunération de lancement | 1 400 |
| Locaux (~100 m², Tana) | plateau + salle de pause | 1 000 |
| Énergie + continuité | JIRAMA + groupe électrogène + carburant + onduleurs | 400 |
| Télécom / Internet | double FAI dédié + 4G backup | 300 |
| SaaS | VoIP (~30 €/poste), Emelia, facturation, divers | 500 |
| Divers / imprévus (~10 %) | | 600 |
| **Total charges fixes** | | **≈ 6 600** |

**Coût complet par ETP productif** : 6 600 / 7 ≈ **~430 €/mois** (hors coût marginal d'un
recrutement supplémentaire ≈ 350-400 € : salaire chargé + poste + quote-part énergie).

## 3. Unit economics par offre (prix `PRICING.md`)

| Offre | Prix | Capacité / coût de service | Marge brute |
|---|---|---|---|
| Médical Confort 590 € | ~500 appels/mois | 1 agent mutualisé porte ~1 800-2 000 appels ⇒ ~4 forfaits Confort ⇒ coût ~110-120 €/forfait | **~80 %** |
| Médical Essentiel 350 € | ~250 appels | ~8 forfaits/agent ⇒ ~55 €/forfait | **~84 %** |
| Support N1 SaaS — MB | 1 350-1 700 €/ETP | 1 agent dédié ≈ 430 € | **~68-75 %** |
| Support N1 SaaS — direct | 1 900-2 400 €/ETP | idem | **~77-82 %** |
| Helpdesk IT N1 — MB | 1 550-2 000 €/ETP | idem | **~72-78 %** |
| Helpdesk IT N1 — direct | 2 200-2 800 €/ETP | idem | **~80-85 %** |

- **Contrainte de couverture médical** : 8h-20h × 5j = 60 h/semaine par position
  ⇒ **1 position continue ≈ 1,7 ETP**. Le plancher de staffing médical est de ~3,5 ETP
  (2 positions permanentes) dès les premiers clients — d'où l'importance de remplir vite.
- Le **plancher absolu** de `PRICING.md` (coût chargé + 20 % ≈ 520 €/ETP) reste très loin
  sous tous les prix : aucun risque de marge unitaire, le risque est le **remplissage**.

## 4. Seuil de rentabilité

Charges fixes ≈ 6 600 €/mois ⇒ exemples de mix au point mort :

| Mix | CA |
|---|---|
| 12 forfaits Confort | 7 080 € |
| 6 Confort + 2 ETP helpdesk MB | 3 540 + 3 500 = 7 040 € |
| 4 Confort + 1 ETP direct + 1 ETP MB | 2 360 + 2 200 + 1 500 = 6 060 € (+1 Essentiel ⇒ 6 410 €) |
| 3 ETP support direct | 6 300-7 200 € |

**Point mort ≈ 6 600-7 000 € de CA mensuel**, atteignable avec **~6-8 clients médical +
2 ETP IT**, soit l'objectif raisonnable de **M+5 à M+7** (cf. scénarios).

## 5. Trajectoire 12 mois — 3 scénarios

Hypothèses communes : démarrage commercial M1 (séquences Emelia), 1er client M2-M3,
encaissement à 30 jours, deal « clients fondateurs » appliqué aux 5 premiers logos
médical (−50/−30/−15 % sur 3 mois ⇒ ~1 660 € de remises cumulées).

| | Prudent | Médian | Ambitieux |
|---|---|---|---|
| Rythme médical | +1 client/mois dès M3 | +2/mois dès M3 | +3/mois dès M2 |
| ETP IT (MB surtout) | 1 à M6, 2 à M10 | 2 à M5, 4 à M10 | 2 à M4, 6 à M10 |
| CA mensuel M6 | ~2 900 € | ~5 700 € | ~9 800 € |
| CA mensuel M12 | ~7 600 € | ~13 600 € | ~21 500 € |
| Point mort | **M+10-11** | **M+6-7** | **M+4-5** |
| Effectif M12 | 10 | 12-13 | 15-16 |
| Cash brûlé avant point mort | ~45-55 k€ | ~28-35 k€ | ~18-25 k€ |

> Au-delà de ~10 clients médical + 4 ETP IT, la capacité des 7 agents est saturée :
> les scénarios médian/ambitieux **imposent de recruter** (+350-400 €/mois par agent,
> 1 mois de formation non facturable). Intégré aux chiffres ci-dessus.

## 6. Trésorerie & BFR

- **Décalage d'encaissement** : facturation à 30 jours ⇒ le CA de M(n) rentre en M(n+1).
  Le BFR croît avec le CA (~1 mois de CA en permanence dehors).
- **Creux de trésorerie maximal** (scénario médian) : ~30-35 k€ atteint vers M+6.
  **Capital de départ recommandé : 40-50 k€** (creux + coussin 30 %). En prudent,
  prévoir 60 k€ ou réduire les fixes (direction).
- **Leviers si le creux menace** : (1) prioriser la MB (cash plus rapide, CAC ~nul),
  (2) acompte au cadrage sur les contrats ETP, (3) prélèvement SEPA dès le 1er mois
  (GoCardless/Stripe, cf. `PRICING.md §6`), (4) geler le 2e salaire de direction.
- Simulation interactive mois par mois : **`tresorerie-salverys.html`** (curseurs :
  capital initial, rythme d'acquisition, mix offres, salaires premium).

## 7. Risques financiers spécifiques

1. **Change Ar/€** : revenus en €, coûts en ariary — une appréciation de l'ariary
   comprime la marge (historiquement faible probabilité, surveiller).
2. **Inflation salariale locale** : guerre des salaires (Intelcia +400 recrutements/an).
   La politique premium absorbe ~2 ans de dérive ; revoir la grille chaque année.
3. **Énergie** : la crise JIRAMA peut renchérir le poste continuité (carburant). Budget
   énergie à considérer comme variable (±50 %).
4. **Concentration client** : à 10 agents, 1 client chaîne 3+ sites peut peser >40 % du
   CA — exiger préavis 60-90 j sur les gros contrats.
5. **Avoirs qualité** : l'engagement 90 % (20 % d'avoir, max 1 mois/12) coûte au pire
   ~1,7 % du CA annuel d'un client — provision négligeable mais à suivre.

---

*Précédente version du prévisionnel écartée le 2026-06-10 (refonte complète demandée).
Coûts locaux sourcés : lagazette-madagascar.com, lexpress.mg, newsmada.com (SME
300 000 Ar fév. 2026), estimations recoupées — détail dans
`EVALUATION-STRATEGIQUE-2026-06.md`.*
