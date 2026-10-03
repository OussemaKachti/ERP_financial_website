import { ModuleKey } from './modules';

/**
 * Solutions par métier. Seuls les métiers que la plateforme sert réellement
 * sont présentés : pas d'industrie ni de BTP, faute de module de production
 * ou de suivi de chantier.
 */
export interface Solution {
  slug: string;
  nom: string;
  icone: string;
  accroche: string;
  titre: string;
  intro: string;
  /** Ce qui coince aujourd'hui. */
  douleurs: { titre: string; texte: string }[];
  /** Ce que la plateforme change, avec l'application concernée. */
  reponses: { module: ModuleKey; titre: string; texte: string }[];
  /** Applications conseillées et offre d'entrée. */
  modules: ModuleKey[];
  offre: 'erp' | 'rh' | 'erp_rh' | 'bundle';
  shot: { src: string; largeur: number; hauteur: number; url: string; titre: string; legende: string };
  seo: string;
}

const S = 'assets/rfidia/screens/';

export const SOLUTIONS: Solution[] = [
  {
    slug: 'negoce-distribution',
    nom: 'Négoce et distribution',
    icone: 'bi-box-seam',
    accroche: 'Stock suivi dépôt par dépôt, bons de livraison reliés aux factures, clients relancés à l’échéance.',
    titre: 'Le stock du logiciel, enfin le même que celui du dépôt.',
    intro:
      'Vous achetez, stockez et revendez chaque semaine. Chaque réception, chaque livraison et chaque facture déplace la marchandise du bon dépôt, et les impayés sont relancés sans que quelqu’un y pense.',
    douleurs: [
      { titre: 'Un stock « à peu près »', texte: 'Les quantités du tableur ne correspondent jamais à ce qu’on compte au dépôt.' },
      { titre: 'Des documents décousus', texte: 'Le bon de livraison, la facture et le règlement vivent dans trois fichiers différents.' },
      { titre: 'Des impayés qui s’accumulent', texte: 'La relance dépend de la personne qui y pense, quand elle y pense.' },
    ],
    reponses: [
      { module: 'finance', titre: 'Stock par dépôt', texte: 'Une facture ou un bon de livraison retire la marchandise du dépôt choisi ; une réception l’y ajoute. Chaque mouvement est daté et rattaché à son document.' },
      { module: 'finance', titre: 'Inventaires qui montrent les écarts', texte: 'Stock théorique et stock compté sont comparés ligne par ligne ; les écarts s’exportent.' },
      { module: 'finance', titre: 'Étiquettes à imprimer', texte: 'Codes-barres et QR codes depuis la référence, sur planche A4 ou en rouleau.' },
      { module: 'finance', titre: 'Relances à l’échéance', texte: 'Le client reçoit un e-mail avec le numéro et le montant exact de sa facture.' },
      { module: 'crm', titre: 'Commerciaux sur la route', texte: 'Visites, devis et catalogue produits avec photos et disponibilité, dans le téléphone.' },
    ],
    modules: ['finance', 'crm'],
    offre: 'erp',
    shot: {
      src: S + 'f-mvtstock.webp', largeur: 2000, hauteur: 1410, url: 'finances.tagstream.com.tn/stock/mouvements',
      titre: 'Mouvements de stock.', legende: 'Datés, rattachés à un article, à un dépôt et au document d’origine.',
    },
    seo: 'Gestion du stock par dépôt, bons de livraison, facturation et relances pour les distributeurs et négociants de Tunisie et d’Algérie.',
  },
  {
    slug: 'services',
    nom: 'Sociétés de services',
    icone: 'bi-briefcase',
    accroche: 'Devis, prestations, notes de débours et encaissements rattachés à la bonne facture.',
    titre: 'Vendez du temps et du savoir-faire, encaissez sans courir.',
    intro:
      'Agences, bureaux d’études, maintenance, conseil : vos devis deviennent des factures en un clic, les débours sont refacturés, et l’équipe est payée juste, avec une paie comptabilisée sans ressaisie.',
    douleurs: [
      { titre: 'Des devis sous Word', texte: 'Retapés en facture, avec le risque de deux documents au même numéro.' },
      { titre: 'Des débours oubliés', texte: 'Les frais avancés pour le client ne sont jamais refacturés.' },
      { titre: 'Une paie ressaisie', texte: 'Calculée dans un tableur, puis recopiée en comptabilité.' },
    ],
    reponses: [
      { module: 'finance', titre: 'Du devis à la facture', texte: 'Un devis accepté devient facture sans rien ressaisir ; chaque type de document a sa numérotation.' },
      { module: 'finance', titre: 'Notes de débours et prestations', texte: 'Les frais avancés et les prestations de service ont leurs propres documents.' },
      { module: 'finance', titre: 'Ce qui reste dû', texte: 'Chaque facture affiche ce qui est payé et ce qui reste ; les encaissements sont rattachés à la banque ou à la caisse.' },
      { module: 'rh', titre: 'Une équipe payée juste', texte: 'Contrats, pointage, congés et bulletins ; la paie validée produit son écriture comptable.' },
    ],
    modules: ['finance', 'rh'],
    offre: 'erp_rh',
    shot: {
      src: S + 'f-facture.webp', largeur: 2000, hauteur: 1250, url: 'finances.tagstream.com.tn/ventes/factures',
      titre: 'Une facture.', legende: 'Aperçu fidèle au PDF, état du règlement et montant en toutes lettres.',
    },
    seo: 'Devis, factures, notes de débours, encaissements et paie pour les sociétés de services en Tunisie et en Algérie.',
  },
  {
    slug: 'equipes-terrain',
    nom: 'Équipes commerciales terrain',
    icone: 'bi-signpost-split',
    accroche: 'Visites saisies sur place, devis transmis à la facturation, activité lue par région.',
    titre: 'Ce que font vos commerciaux, visible le jour même.',
    intro:
      'Vos commerciaux passent leurs journées chez les clients. Chaque visite se saisit sur place, confirmée par GPS ; le devis rédigé pendant le rendez-vous part directement en facturation, et vous voyez où l’on vend — et où l’on pourrait vendre.',
    douleurs: [
      { titre: 'Les visites racontées le vendredi', texte: 'Quand on s’en souvient, et sans savoir si elles ont eu lieu.' },
      { titre: 'Des devis perdus en route', texte: 'Rédigés sur un coin de cahier, retapés au bureau, parfois jamais.' },
      { titre: 'Aucune vue par région', texte: 'Impossible de savoir quels gouvernorats sont couverts et lesquels sont délaissés.' },
    ],
    reponses: [
      { module: 'crm', titre: 'Visites confirmées par GPS', texte: 'Objet, intérêt du client, montant estimé, probabilité de signature et prochaine action.' },
      { module: 'crm', titre: 'Recherche en langage courant', texte: 'Écrivez « visites Nabeul cette semaine » : les résultats s’affichent et s’exportent vers Excel.' },
      { module: 'crm', titre: 'Carte par gouvernorat', texte: 'Clients, prospects et visites de chaque région, avec l’intensité de l’activité.' },
      { module: 'finance', titre: 'Devis transmis à la facturation', texte: 'Chaque devis accepté pendant une visite est aussi créé dans la Finance.' },
    ],
    modules: ['crm', 'finance', 'rh'],
    offre: 'bundle',
    shot: {
      src: S + 'c-carte.webp', largeur: 1370, hauteur: 1452, url: 'crm.tagstream.com.tn/analytics',
      titre: 'Carte par gouvernorat.', legende: 'Clients, prospects et visites de chaque région.',
    },
    seo: 'CRM terrain : visites confirmées par GPS, devis transmis à la facturation et activité par gouvernorat pour les équipes commerciales.',
  },
  {
    slug: 'cabinets-comptables',
    nom: 'Cabinets et experts-comptables',
    icone: 'bi-journal-check',
    accroche: 'Plusieurs sociétés depuis le même accès, une comptabilité tenue au fil des factures.',
    titre: 'Vos dossiers clients, tenus au fil de l’eau.',
    intro:
      'Quand vos clients facturent dans RFIDIA, les écritures se forment au fil des ventes, des achats et de la paie. Vous passez d’une société à l’autre depuis le même accès, avec les droits qu’elles vous donnent.',
    douleurs: [
      { titre: 'Des pièces qui arrivent en vrac', texte: 'Un carton de factures en fin de mois, et tout à ressaisir.' },
      { titre: 'Des clients sans visibilité', texte: 'Ils attendent la clôture pour savoir où ils en sont.' },
      { titre: 'Un accès par dossier', texte: 'Un identifiant par client, un logiciel par habitude.' },
    ],
    reponses: [
      { module: 'finance', titre: 'Multi-société', texte: 'Un même accès ouvre plusieurs entreprises ; les données de chacune restent séparées.' },
      { module: 'finance', titre: 'Comptabilité prête', texte: 'Plan comptable standard et personnalisable, journaux, exercices, écritures avec brouillon et validation.' },
      { module: 'finance', titre: 'États à jour', texte: 'Grand livre, balance générale et des tiers, bilan, compte de résultat, flux de trésorerie, TVA.' },
      { module: 'rh', titre: 'Paie comptabilisée', texte: 'Charges de personnel, cotisations et salaires dus passent en une écriture.' },
    ],
    modules: ['finance', 'rh'],
    offre: 'erp_rh',
    shot: {
      src: S + 'f-cr.webp', largeur: 2000, hauteur: 1410, url: 'finances.tagstream.com.tn/rapports/compte-resultat',
      titre: 'Compte de résultat.', legende: 'Du chiffre d’affaires au résultat, chaque famille de charges rendue visible.',
    },
    seo: 'Multi-société, comptabilité générale, états financiers et paie comptabilisée pour les cabinets et experts-comptables.',
  },
];
