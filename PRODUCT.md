# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dirigeants et responsables (DAF, comptable, directeur commercial, responsable RH) de PME de Tunisie et d’Algérie : négoce, distribution et services, qui facturent chaque semaine, gèrent un stock, emploient de 5 à 50 personnes et ont souvent une équipe commerciale sur le terrain. Ils arrivent sur le site commercial pour comprendre l’offre, comparer, puis demander une démonstration ou ouvrir un essai. Le site est aussi montré en rendez-vous client par l’équipe commerciale RFIDIA, et partagé sur LinkedIn.

## Product Purpose

RFIDIA est une suite de gestion en ligne composée de trois applications qui partagent le même compte, les mêmes sociétés et les mêmes utilisateurs :

- **Finance** : devis, factures, avoirs, bons de livraison, achats, factures fournisseur lues automatiquement (OCR), stock par dépôt, trésorerie, TVA, comptabilité générale et analytique, états financiers.
- **CRM** : prospects, visites terrain confirmées par GPS, devis transmis à la Finance, rendez-vous, tâches, mémos vocaux, carte par gouvernorat, indicateurs par commercial.
- **RH** : employés, contrats, pointage, congés et autorisations, paie (CNSS, IRPP/IRG), avances et prêts, paie comptabilisée automatiquement.

Le site commercial doit convaincre une PME de demander une démonstration ou de démarrer l’essai gratuit.

## Positioning

Trois applications, un seul compte, des données qui circulent : ce qui est saisi une fois sert partout (devis du CRM → Finance, paie RH → écriture comptable), sans ressaisie ni migration quand on ajoute un module. Démarrer avec la Finance ou les RH, ajouter le reste quand l’entreprise en a besoin. Les mots doivent être créatifs et attirants : les concurrents (Swifto, etc.) répètent tous « ERP tout-en-un, conforme, temps réel » ; RFIDIA doit se différencier dans le ton, pas seulement dans la liste de fonctionnalités.

## Operating Context

- Applications en ligne : finances.tagstream.com.tn, crm.tagstream.com.tn, rh.tagstream.com.tn ; connexion via /platforms ; inscription et essai via /auth/auth1/register.
- Interface Finance et RH en français ou en arabe (RTL) ; CRM en français. Documents clients en français.
- 4 devises au millime : TND, DZD, EUR, USD. Multi-société, rôles propriétaire / administrateur / collaborateur.
- Aucune installation : navigateur, ordinateur ou téléphone.

## Capabilities and Constraints

- Site Angular 22 (standalone, signals) dans `src/app/site`, déployé sur Vercel, construit sur un template Folio dont seuls le socle Bootstrap et quelques dépendances sont utilisés.
- Tarifs : `src/app/site/data/pricing.ts` (ou API publique si `offresPubliquesUrl` est renseignée). Offre de lancement jusqu’au 15/12/2026. Le CRM n’est vendu que dans la suite complète.
- Le nom commercial définitif n’est pas arrêté (`SITE.nom`).
- Ne promettre que ce qui fonctionne : les « suggestions de trajet » du CRM, en simulation, ne sont pas citées.

## Brand Commitments

- Nom : RFIDIA (RFIDIA Technology). Logo : anneau tricolore + mot-symbole, `public/assets/rfidia/brand/`.
- Couleurs du logo : marine #1F2553, corail #F0A080, rose #E04D68, violet #7B5EA7, turquoise #4FB3C4.
- Langue du site : français.
- Le site ne doit pas avoir l’air généré par une IA.

## Evidence on Hand

- Captures réelles de l’application (société de démonstration MEDIMEX) : `public/assets/rfidia/screens/` ; à utiliser avec parcimonie.
- Vidéo commerciale 1 min 37 s avec bande-son : `C:\Users\Oussema\rfidia-commercial\out\rfidia-commercial.mp4`.
- Dossier de présentation 2026 (contenu des modules) dans le dépôt ERP.
- Chiffre « 600+ entreprises » : **provisoire, fourni par l’équipe le 2026-10-03, à corriger** ; centralisé dans `site.config.ts`.
- Coordonnées : rfidia@rfidia.com, e.saoussen@rfidia.com ; +216 94 103 351, +216 98 268 262 ; Hannibal Park, Africa Mall, Av. Mustapha Hjeij, Ariana 1002, Tunisie.
- Aucun témoignage, logo client ni étude de cas n’est disponible : ne pas en inventer.

## Product Principles

1. Prouver par l’écran et la vidéo plutôt que par l’adjectif.
2. Montrer le lien entre les trois applications : c’est ce qu’un concurrent n’a pas.
3. Parler le langage du dirigeant de PME maghrébine (millime, CNSS, gouvernorat, WhatsApp), pas celui d’un éditeur.
4. Chaque page mène à une démonstration ou à l’essai, sans pression.
5. N’afficher que des faits vérifiables ; les chiffres provisoires sont centralisés et marqués.
