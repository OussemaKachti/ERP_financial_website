import { ModuleKey } from './modules';

/**
 * Contenu de l'accueil (univers zellige). Les exemples chiffrés reprennent
 * la société de démonstration MEDIMEX et les écrans du dossier 2026.
 */

/** Ce qui tient l'entreprise aujourd'hui : la mosaïque cassée. */
export const BRICOLAGE: { texte: string; detail: string }[] = [
  { texte: 'Factures_2026_FINAL_v3.xlsx', detail: 'Deux factures portent le même numéro.' },
  { texte: 'Le cahier de crédit', detail: 'Qui doit quoi, depuis quand ?' },
  { texte: 'Groupe WhatsApp « Commandes »', detail: 'Le devis est quelque part dans le fil.' },
  { texte: 'Bulletins de paie sous Excel', detail: 'Puis ressaisis en comptabilité.' },
  { texte: 'Le stock « à peu près »', detail: 'Jamais le même qu’au dépôt.' },
  { texte: '« Demande à Samir »', detail: 'Il est en congé jusqu’à lundi.' },
];

/** Une étape du parcours d'un document, d'une application à l'autre. */
export interface Etape {
  module: ModuleKey;
  titre: string;
  texte: string;
  /** Exemple réel tiré de la société de démonstration. */
  exemple: string;
}

export const PARCOURS: { id: string; titre: string; etapes: Etape[] }[] = [
  {
    id: 'vente',
    titre: 'Une vente, de la visite à la comptabilité',
    etapes: [
      { module: 'crm', titre: 'Visite', texte: 'Saisie sur place, position GPS vérifiée.', exemple: 'Clinique Les Oliviers, Sousse' },
      { module: 'crm', titre: 'Devis', texte: 'Rédigé pendant la visite, accepté par le client.', exemple: 'D-2026-0318 · 12 450,000 DT' },
      { module: 'finance', titre: 'Facture', texte: 'Créée depuis le devis, sans rien ressaisir.', exemple: 'FA-2026-0142' },
      { module: 'finance', titre: 'Encaissement', texte: 'Chèque, virement ou espèces, rattaché à la banque.', exemple: 'Relance automatique à l’échéance' },
      { module: 'finance', titre: 'Écriture', texte: 'Le journal se remplit tout seul.', exemple: 'Balance et TVA à jour' },
    ],
  },
  {
    id: 'paie',
    titre: 'Un mois de travail, du pointage à l’écriture de paie',
    etapes: [
      { module: 'rh', titre: 'Pointage', texte: 'Arrivées, départs, retards et heures supplémentaires.', exemple: '5 présents · 1 congé validé' },
      { module: 'rh', titre: 'Bulletin', texte: 'Calculé depuis le contrat, les absences et les avances.', exemple: 'CNSS 9,18 % · IRPP' },
      { module: 'rh', titre: 'Paie validée', texte: 'Un contrôle, puis une seule validation.', exemple: 'Net à payer : 1 949,020 DT' },
      { module: 'finance', titre: 'Écriture', texte: 'Charges, cotisations et salaires dus, comptabilisés.', exemple: 'Équilibrée, sans ressaisie' },
    ],
  },
];

/** Ce que chaque responsable obtient. */
export const ROLES: {
  id: string;
  role: string;
  question: string;
  points: string[];
  modules: ModuleKey[];
}[] = [
  {
    id: 'dirigeant',
    role: 'Dirigeant',
    question: '« Où en est l’entreprise ce mois-ci, sans attendre la clôture ? »',
    points: [
      'Revenus, dépenses, résultat et marge du mois, comparés au mois précédent.',
      'Plusieurs sociétés depuis le même accès, chacune avec ses données.',
      'Les invitations et les droits de chaque collaborateur, en un seul endroit.',
    ],
    modules: ['finance', 'crm', 'rh'],
  },
  {
    id: 'daf',
    role: 'DAF et comptable',
    question: '« Qui nous doit quoi, et qu’est-ce qui part en fin de mois ? »',
    points: [
      'Factures fournisseur lues automatiquement, doublons et prix anormaux signalés.',
      'Encaissements rattachés aux banques et aux caisses, relances à l’échéance.',
      'Plan comptable prêt, grand livre, balance, TVA et états financiers.',
    ],
    modules: ['finance'],
  },
  {
    id: 'commercial',
    role: 'Directeur commercial',
    question: '« Qu’ont vraiment fait mes commerciaux sur le terrain cette semaine ? »',
    points: [
      'Visites confirmées par GPS, avec objet, intérêt et prochaine action.',
      'Devis suivis jusqu’à la facture, taux d’acceptation par commercial.',
      'Carte de l’activité par gouvernorat et prospects à relancer.',
    ],
    modules: ['crm', 'finance'],
  },
  {
    id: 'rh',
    role: 'Responsable RH',
    question: '« La paie est-elle juste, et sera-t-elle comptabilisée sans ressaisie ? »',
    points: [
      'Dossiers, contrats, départements et postes de chaque salarié.',
      'Pointage, congés et autorisations validés en ligne.',
      'Bulletins calculés, avances et prêts suivis, paie comptabilisée en une opération.',
    ],
    modules: ['rh', 'finance'],
  },
];

/** La bande de faits qui traverse l'accueil. */
export const FAITS: string[] = [
  'TVA 19 %',
  'Timbre fiscal',
  'Retenue à la source',
  'CNSS',
  'IRPP',
  'Montants au millime',
  'TND · DZD · EUR · USD',
  'Français · العربية',
  'Multi-société',
  'Visites GPS',
  'Factures lues automatiquement',
  'PDF à vos couleurs',
  'Envoi par WhatsApp',
  'Relances à l’échéance',
  'Stock par dépôt',
  'Paie comptabilisée',
];
