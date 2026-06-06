# CONFORMITE-HDS-RGPD.md — Salverys (télésecrétariat médical)

> Note d'analyse autonome, réutilisable en réponse client / appel d'offres. Cadre la
> conformité de l'activité **télésecrétariat médical** opérée depuis Madagascar (offshore)
> pour des cabinets français. Complète le prévisionnel (`FINANCE-PREVISIONNEL.md §5`).

---

## 1. HDS certifie l'hébergement, pas la téléphonie

La certification **HDS (Hébergeur de Données de Santé)** porte sur l'**hébergement** de la
donnée de santé, **pas sur la téléphonie**. Les solutions de téléphonie cloud (Aircall,
Ringover & co.) **ne sont pas des « téléphonies HDS »** : l'expression n'a pas de sens
réglementaire.

- **Ringover n'est PAS confirmé HDS.** Toute affirmation « notre téléphonie est HDS » doit
  être **vérifiée nominativement** sur la **liste officielle ANS** (esante.gouv.fr) avant
  d'être reprise dans un argumentaire ou un contrat.
- Conséquence : on ne « résout » pas la conformité en achetant une téléphonie estampillée
  HDS — on la résout en **ne créant pas de donnée de santé à héberger** (cf. §2).

---

## 2. Levier SaaS-first : ne pas créer de donnée de santé à héberger

L'approche par défaut (cf. `CLAUDE.md`, arbitrage SaaS-first) **supprime le besoin d'une
brique HDS payante** en évitant de produire de la donnée de santé côté Salverys :

- **Pas d'enregistrement des appels patients.**
- **Donnée patient uniquement dans Doctolib** (lui-même HDS) — le télésecrétaire saisit
  directement dans l'outil du cabinet, qui reste l'hébergeur.
- La **téléphonie ne fait que router** l'appel → **exposition HDS ~nulle** côté Salverys,
  **aucune brique d'hébergement à construire ni à payer**.

**CRM maison** : il ne contient que des **données B2B cabinets** (prospects/clients
professionnels), **jamais de donnée patient**. Les **freelances signent des DPA**
(accords de sous-traitance RGPD).

---

## 3. Signal offshore : risque RGPD de transfert + risque commercial

Madagascar est un pays **offshore** (hors UE/EEE), ce qui ouvre deux sujets distincts :

- **Référentiel HDS (mai 2024)** : exige un **hébergement en EEE**.
- **Décret du 24 mars 2026** : introduit des **obligations de souveraineté** (applicables
  **septembre 2026**) qui **excluent une bonne partie de l'offshore**.

Pour Salverys :

1. **RGPD — transfert hors-UE.** L'**accès** à de la donnée depuis Madagascar constitue un
   transfert hors-UE à encadrer (clauses contractuelles, mesures techniques, information).
   À noter : **accès ≠ hébergement** — le modèle §2 limite fortement l'exposition, mais le
   sujet doit être **documenté**, pas ignoré.
2. **Vulnérabilité commerciale.** Face à des concurrents « **100 % France** », l'offshore
   est un **angle d'attaque** en appel d'offres. À anticiper dans le discours (montrer que
   la donnée patient ne quitte pas l'hébergeur HDS du cabinet).

> **Conclusion** : le modèle **n'est pas interdit** (l'accès encadré n'est pas un
> hébergement), mais l'offshore est un **risque à documenter et à défendre**, pas à passer
> sous silence. Vérifier l'évolution réglementaire (souveraineté sept. 2026) avant tout
> engagement contractuel long.
