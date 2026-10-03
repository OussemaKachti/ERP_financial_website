/** Liens de navigation partagés par l'en-tête et le pied de page. */
export interface Lien {
  lien: string;
  label: string;
  /** Couleur de l'application, pour la pastille. */
  couleur?: string;
}

export const NAV_PRINCIPALE: Lien[] = [
  { lien: '/finance', label: 'Finance', couleur: 'var(--z-finance)' },
  { lien: '/crm', label: 'CRM', couleur: 'var(--z-crm)' },
  { lien: '/rh', label: 'RH', couleur: 'var(--z-rh)' },
  { lien: '/tarifs', label: 'Tarifs' },
];

export const NAV_APPLICATIONS: Lien[] = [
  { lien: '/finance', label: 'Finance' },
  { lien: '/crm', label: 'CRM terrain' },
  { lien: '/rh', label: 'Ressources humaines' },
  { lien: '/tarifs', label: 'Tarifs' },
];

export const NAV_DECOUVRIR: Lien[] = [{ lien: '/demonstration', label: 'Demander une démonstration' }];
