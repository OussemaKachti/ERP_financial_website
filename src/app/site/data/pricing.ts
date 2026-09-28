import { ModuleKey } from './modules';

/**
 * Grille tarifaire, recopiée de `src/config/packCatalog.ts` (API ERP), qui
 * reste la source de vérité. Si `SITE.offresPubliquesUrl` est renseignée,
 * les prix affichés viennent du serveur (cf. PricingService).
 */

export interface Tarif {
  mensuel: number;
  annuel: number;
}

export interface Offre {
  cle: 'erp' | 'rh' | 'erp_rh' | 'bundle';
  nom: string;
  tagline: string;
  modules: ModuleKey[];
  tarif: Tarif;
  promo: Tarif;
  points: string[];
  miseEnAvant?: boolean;
}

export const PROMOTION = {
  libelle: 'Offre de lancement',
  fin: '2026-12-15T23:59:59.999+01:00',
  finLisible: '15 décembre 2026',
  conditions: 'Offre valable pour toute signature jusqu’au 15 décembre 2026, pour un utilisateur et une entreprise.',
};

export const CONDITIONS = 'Prix hors taxes, en dinars tunisiens. TVA de 19 % et timbre fiscal en sus.';

export function promotionActive(date: Date = new Date()): boolean {
  return date.getTime() <= new Date(PROMOTION.fin).getTime();
}

export const OFFRES: Offre[] = [
  {
    cle: 'erp',
    nom: 'Finance',
    tagline: 'Ventes, achats, stock et comptabilité',
    modules: ['finance'],
    tarif: { mensuel: 35, annuel: 350 },
    promo: { mensuel: 25, annuel: 200 },
    points: [
      'Devis, factures, bons de livraison et avoirs',
      'Achats, fournisseurs et lecture des factures',
      'Stock multi-dépôts et inventaires',
      'Trésorerie, encaissements et relances',
      'Comptabilité et états financiers',
    ],
  },
  {
    cle: 'rh',
    nom: 'RH',
    tagline: 'Personnel, présences, congés et paie',
    modules: ['rh'],
    tarif: { mensuel: 30, annuel: 350 },
    promo: { mensuel: 20, annuel: 200 },
    points: [
      'Employés, contrats, départements et postes',
      'Pointage et suivi des présences',
      'Congés et autorisations',
      'Paie, cotisations CNSS et bulletins',
      'Avances et prêts sur salaire',
    ],
  },
  {
    cle: 'erp_rh',
    nom: 'Finance + RH',
    tagline: 'Gestion commerciale, comptabilité et paie',
    modules: ['finance', 'rh'],
    tarif: { mensuel: 60, annuel: 600 },
    promo: { mensuel: 40, annuel: 300 },
    points: [
      'Toutes les fonctionnalités Finance',
      'Toutes les fonctionnalités RH',
      'Paie comptabilisée automatiquement',
      'Un seul compte pour les deux applications',
    ],
  },
  {
    cle: 'bundle',
    nom: 'Suite complète',
    tagline: 'Finance, RH et CRM terrain réunis',
    modules: ['finance', 'crm', 'rh'],
    tarif: { mensuel: 75, annuel: 750 },
    promo: { mensuel: 50, annuel: 400 },
    miseEnAvant: true,
    points: [
      'Finance, RH et CRM réunis',
      'Visites terrain et devis reliés à la facturation',
      'Paie comptabilisée automatiquement',
      'Un seul compte pour les trois applications',
      'Support prioritaire',
    ],
  },
];
