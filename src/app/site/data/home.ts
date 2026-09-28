import { ModuleKey } from './modules';

/** Situations « aujourd'hui / avec la plateforme » du dossier de présentation. */
export const SITUATIONS: { avant: string; module: ModuleKey; apres: string }[] = [
  {
    avant: 'Les factures sont préparées sous Word ou Excel, et deux documents finissent par porter le même numéro.',
    module: 'finance',
    apres: 'Chaque type de document suit sa propre numérotation automatique. La facture sort en PDF à vos couleurs et part par e-mail ou WhatsApp depuis sa fiche.',
  },
  {
    avant: 'Les relances de paiement dépendent de la personne qui y pense.',
    module: 'finance',
    apres: 'Vous définissez une fois vos règles de relance. Le client reçoit un e-mail à l’échéance, avec le numéro et le montant exact de sa facture.',
  },
  {
    avant: 'Une facture fournisseur a été payée deux fois. Une hausse de prix est passée inaperçue.',
    module: 'finance',
    apres: 'À l’enregistrement, la plateforme signale une facture qui ressemble à une facture déjà saisie, ou un prix qui s’écarte nettement de vos derniers achats.',
  },
  {
    avant: 'Le stock affiché dans le logiciel ne correspond jamais au dépôt.',
    module: 'finance',
    apres: 'Chaque facture et chaque réception génère son mouvement de stock, dépôt par dépôt. Les inventaires font apparaître les écarts.',
  },
  {
    avant: 'Les commerciaux racontent leurs visites le vendredi, quand ils s’en souviennent.',
    module: 'crm',
    apres: 'La visite se saisit sur place depuis le téléphone, avec une position GPS vérifiée. Le devis issu de la visite arrive directement dans la facturation.',
  },
  {
    avant: 'La paie se calcule dans un tableur, puis se ressaisit en comptabilité.',
    module: 'rh',
    apres: 'Le bulletin se calcule à partir du contrat, des absences et des avances en cours. Une fois validée, la paie est comptabilisée en une opération.',
  },
];

/** Galerie « preuve par l'écran » de l'accueil. */
export const GALERIE: { src: string; module: ModuleKey; url: string; texte: string; largeur: number; hauteur: number }[] = [
  { src: 'f-facture.webp', module: 'finance', url: 'finances.tagstream.com.tn/ventes/factures', texte: 'Une facture fidèle au PDF, avec l’état du règlement et le montant en toutes lettres.', largeur: 2000, hauteur: 1250 },
  { src: 'c-visite.webp', module: 'crm', url: 'crm.tagstream.com.tn/visit-form', texte: 'Une visite créée en trois étapes, confirmée par la position GPS du commercial.', largeur: 2000, hauteur: 1250 },
  { src: 'r-paie.webp', module: 'rh', url: 'rh.tagstream.com.tn/paie', texte: 'Les décisions de paie visibles avant de générer le bulletin.', largeur: 2000, hauteur: 1250 },
  { src: 'f-factfourn.webp', module: 'finance', url: 'finances.tagstream.com.tn/achats/factures', texte: 'Une facture fournisseur lue automatiquement, avec le visa « Bon à payer ».', largeur: 2000, hauteur: 1250 },
  { src: 'c-prospects.webp', module: 'crm', url: 'crm.tagstream.com.tn/prospects', texte: 'Des prospects qui avancent d’un statut à l’autre, modifiables dans la liste.', largeur: 2000, hauteur: 1250 },
  { src: 'r-pointage.webp', module: 'rh', url: 'rh.tagstream.com.tn/pointage', texte: 'Le pointage du jour : présents, absents et taux de présence.', largeur: 2000, hauteur: 1250 },
  { src: 'f-articles.webp', module: 'finance', url: 'finances.tagstream.com.tn/stock/articles', texte: 'Un catalogue d’articles avec la quantité en stock de chaque référence.', largeur: 2000, hauteur: 1250 },
  { src: 'c-taches.webp', module: 'crm', url: 'crm.tagstream.com.tn/tasks', texte: 'Les tâches de l’équipe en colonnes, avec priorité et échéance.', largeur: 2000, hauteur: 1250 },
];

/** Circulation des données entre applications. */
export const FLUX: { de: ModuleKey; deLabel: string; vers: ModuleKey; versLabel: string; texte: string }[] = [
  { de: 'crm', deLabel: 'CRM', vers: 'finance', versLabel: 'Finance', texte: 'Le devis établi pendant une visite est créé automatiquement dans les devis de la Finance.' },
  { de: 'rh', deLabel: 'RH', vers: 'finance', versLabel: 'Comptabilité', texte: 'La paie validée produit son écriture comptable : charges de personnel, cotisations et salaires dus.' },
  { de: 'rh', deLabel: 'RH', vers: 'finance', versLabel: 'Finance', texte: 'L’annuaire des employés se consulte depuis la Finance, sans accès aux dossiers de paie.' },
  { de: 'finance', deLabel: 'Ventes', vers: 'finance', versLabel: 'Trésorerie', texte: 'Les règlements clients et fournisseurs sont rattachés aux comptes bancaires et aux caisses.' },
];

export const PILIERS: { titre: string; texte: string }[] = [
  { titre: 'Un seul accès', texte: 'Un identifiant ouvre les trois applications. On passe de la Finance au CRM ou aux RH sans se reconnecter.' },
  { titre: 'Plusieurs sociétés', texte: 'Un dirigeant qui gère plusieurs entreprises bascule de l’une à l’autre. Les données de chaque société restent séparées.' },
  { titre: 'Des rôles clairs', texte: 'Propriétaire, administrateur ou collaborateur : invitations et droits se gèrent depuis les paramètres.' },
  { titre: 'Adapté à votre cadre', texte: 'Taxes, timbre fiscal, retenue à la source, numérotation et mentions légales se règlent pour chaque société.' },
];

export const METIERS: { icone: string; titre: string; texte: string }[] = [
  { icone: 'bi-box-seam', titre: 'Négoce et distribution', texte: 'Stock suivi dépôt par dépôt, bons de livraison reliés aux factures, relances des clients à l’échéance.' },
  { icone: 'bi-briefcase', titre: 'Sociétés de services', texte: 'Devis, prestations, notes de débours et encaissements rattachés à la bonne facture.' },
  { icone: 'bi-signpost-split', titre: 'Équipes terrain', texte: 'Visites saisies sur place, devis transmis à la facturation, activité lue par région.' },
];

export const ETAPES: { titre: string; texte: string }[] = [
  { titre: 'Créer le compte', texte: 'Une adresse e-mail et un mot de passe, depuis n’importe quel navigateur.' },
  { titre: 'Décrire la société', texte: 'Raison sociale, identifiant fiscal, adresse, logo et devise.' },
  { titre: 'Choisir les modules', texte: 'Période d’essai gratuite, puis souscription mensuelle ou annuelle.' },
  { titre: 'Inviter l’équipe', texte: 'Chaque collaborateur reçoit ses accès et son rôle.' },
];

export interface Question {
  q: string;
  r: string[];
}

export const FAQ_ACCUEIL: Question[] = [
  {
    q: 'Faut-il installer un logiciel ?',
    r: [
      'Non. Les trois applications s’ouvrent dans le navigateur, depuis un ordinateur ou un téléphone. Il suffit de créer un compte et de décrire votre société.',
    ],
  },
  {
    q: 'Puis-je commencer avec un seul module ?',
    r: [
      'Oui. La Finance et les RH se souscrivent seules ou ensemble ; le CRM terrain est compris dans la suite complète. Ajouter un module plus tard se fait sans migration ni ressaisie : il partage le même compte, les mêmes sociétés et les mêmes utilisateurs.',
    ],
  },
  {
    q: 'Mes données sont-elles séparées de celles des autres clients ?',
    r: [
      'Chaque société dispose de ses propres données, strictement séparées, et chaque utilisateur ne voit que les modules souscrits par sa société et ce que son rôle lui permet. Un commercial suit ses propres chiffres ; l’annuaire des employés se consulte sans accès aux dossiers de paie.',
    ],
  },
  {
    q: 'Comment reprendre ce que j’ai déjà ?',
    r: [
      'Le plan comptable standard et les types de congés usuels se mettent en place en une seule opération : l’essentiel du paramétrage est fait avant la première facture.',
      'Pour vos clients, vos articles et vos soldes d’ouverture, nous regardons ensemble lors de la démonstration la meilleure façon de les reprendre.',
    ],
  },
  {
    q: 'Les montants sont-ils gérés au millime ?',
    r: [
      'Oui. Les montants se saisissent et se conservent au millime. Quatre devises sont disponibles : dinar tunisien, dinar algérien, euro et dollar.',
    ],
  },
  {
    q: 'L’interface existe-t-elle en arabe ?',
    r: [
      'La Finance et les RH s’utilisent en français ou en arabe, de droite à gauche. Chaque utilisateur choisit sa langue. Les documents envoyés aux clients — factures, e-mails — restent en français. Le CRM est aujourd’hui en français.',
    ],
  },
];

export const FAQ_TARIFS: Question[] = [
  {
    q: 'Les prix incluent-ils la TVA ?',
    r: ['Non, les prix sont indiqués hors taxes. La TVA de 19 % et le timbre fiscal s’ajoutent à la facture.'],
  },
  {
    q: 'Que comprend l’offre de lancement ?',
    r: [
      'Des prix réduits pour toute signature jusqu’au 15 décembre 2026. Le prix est figé au moment où vous déposez votre demande, même si elle est validée après cette date. L’offre vaut pour un utilisateur et une entreprise.',
    ],
  },
  {
    q: 'Mensuel ou annuel ?',
    r: [
      'Les deux sont possibles. L’abonnement annuel est un forfait : il revient nettement moins cher que douze mensualités et vous évite une facture chaque mois.',
    ],
  },
  {
    q: 'Puis-je essayer avant de payer ?',
    r: ['Oui. Après la création du compte, vous choisissez vos modules et démarrez par une période d’essai gratuite, puis vous passez à la souscription mensuelle ou annuelle.'],
  },
  {
    q: 'Peut-on acheter le CRM seul ?',
    r: [
      'Non. Le CRM terrain prend tout son sens relié à la facturation : il est proposé dans la suite complète, avec la Finance et les RH.',
    ],
  },
];
