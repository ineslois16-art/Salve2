# FINANCE-PREVISIONNEL.md — Salverys (prévisionnel an 1)

> **Squelette à remplir.** Structure + hypothèses figées. Le **tableau 12 mois et la
> synthèse sont vides** (`—`) : ils seront **calculés à partir du fichier de données**
> fourni par la direction, **pas** à partir des chiffres de discussion.
>
> **Alignement tarifaire** : toutes les valeurs de prix renvoient à **`PRICING.md`**,
> source unique de vérité. En cas de divergence, **`PRICING.md` fait foi**.

---

## 1. Cadre du modèle

- **Démarrage médical d'abord** (télésecrétariat), puis **Support N1 en marque blanche**
  dès ~M5 comme levier d'effectif vers « 10 personnes ».
- **100 % freelances en télétravail** : pas de local, pas de FAI/onduleur côté entreprise.
- **Direction** : 2 fondateurs **hors périmètre** (sans salaire dans ce prévisionnel).

---

## 2. Hypothèses verrouillées

| # | Poste | Hypothèse | Source |
|---|---|---|---|
| H1 | Forfait médical moyen | **~420 €/mois** (majorité Essentiel 350 €) | `PRICING.md §1` |
| H2 | Capacité médicale | 1 freelance sert **~6 cabinets** | hypothèse de discussion |
| H3 | Acquisition médicale | **1-2 cabinets/mois** | hypothèse de discussion |
| H4 | Niche 2 — Support N1 (marque blanche) | **1 350 €/ETP**, **1 ETP = 1 freelance** | `PRICING.md §3` |
| H5 | Démarrage Niche 2 | **M5**, puis **+1 ETP/mois** | hypothèse de discussion |
| H6 | Coût freelance | **550 €/mois** (temps plein Mada, sans charges patronales ni local) | hypothèse de discussion |
| H7 | VoIP Aircall | **50 €/mois/freelance médical** uniquement (en MB, outil fourni par le donneur d'ordre) | hypothèse de discussion |
| H8 | Superviseur dédié | **~750 €/mois** dès M1 (compté dans les 10) | hypothèse de discussion |
| H9 | Facturation SaaS | **~100 €/mois** (Stripe/Pennylane) | `PRICING.md §6` |
| H10 | Offre de lancement | **1er mois client à -50 %** | `PRICING.md §7` |
| H11 | Setup nouveau client médical | **~40 €** (paramétrage + formation logiciel), frappe le mois d'acquisition | hypothèse de discussion |

> ℹ️ H2 (`~6 cabinets`) et H11 (`40 € de setup`) étaient citées dans `PRICING.md §7`. Ce §7
> a été recentré sur la décision « 1er mois -50 % » (chiffrage retiré) ; ces deux valeurs
> sont donc désormais des **hypothèses de discussion internes** à ce prévisionnel.

---

## 3. Tableau prévisionnel 12 mois — *à remplir*

> Renseigner chaque cellule depuis le fichier de données. Règle de cohérence :
> **Trésorerie cumulée (M_n) = Trésorerie cumulée (M_n-1) + Marge (M_n)**, et
> **Trésorerie cumulée (M12) = somme des marges mensuelles**.

| Mois | Personnes | CA / mois | Marge / mois | Trésorerie cumulée |
|---|---|---|---|---|
| M1 | — | — | — | — |
| M2 | — | — | — | — |
| M3 | — | — | — | — |
| M4 | — | — | — | — |
| M5 | — | — | — | — |
| M6 | — | — | — | — |
| M7 | — | — | — | — |
| M8 | — | — | — | — |
| M9 | — | — | — | — |
| M10 | — | — | — | — |
| M11 | — | — | — | — |
| M12 | — | — | — | — |

---

## 4. Synthèse an 1 — *à remplir*

| Indicateur | Valeur |
|---|---|
| CA annuel | — |
| Marge cumulée an 1 | — |
| Creux de trésorerie (montant) | — |
| Mois du creux de trésorerie | — |
| Mois de trésorerie positive | — |
| Point mort mensuel (CA seuil) | — |
| Mois d'atteinte des 10 personnes | — |

---

## 5. Conditions de réalité

1. **Acquisition = hypothèse la plus sensible.** Tout le modèle dépend du rythme
   d'acquisition (1-2 cabinets médicaux/mois + 1er contrat marque blanche ~M5). À
   stress-tester en priorité quand les vrais chiffres arrivent.
2. **Qualité des freelances à distance.** Le turnover est un risque direct sur la
   continuité de service ; c'est le rôle du **superviseur dédié (H8)** d'absorber ce risque.
3. **Conformité HDS / RGPD.** Sujet traité dans une note dédiée : **voir
   [`CONFORMITE-HDS-RGPD.md`](CONFORMITE-HDS-RGPD.md)**.

---

## 6. Note

Ce document est un **modèle de cadrage** issu d'hypothèses de discussion. Les résultats
(tableau §3, synthèse §4) sont **à recalculer** à partir du fichier de données de la
direction, puis à **réviser** dès que les vrais chiffres d'acquisition sont connus. Ne pas
figer les valeurs sans les avoir dérivées des données fournies.
