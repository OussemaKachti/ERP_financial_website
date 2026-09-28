/**
 * Contenu des trois applications. Les textes reprennent le dossier de
 * présentation 2026 : chaque fonctionnalité citée y a été vérifiée dans le
 * code et à l'écran. Les captures viennent de la société de démonstration
 * MEDIMEX (distributeur d'équipements de traçabilité pour cliniques).
 */

export type ModuleKey = 'finance' | 'crm' | 'rh';

export interface Shot {
  src: string;
  alt: string;
  /** Légende : début en gras, puis la phrase explicative. */
  titre: string;
  legende: string;
  /** Adresse affichée dans la barre de la fenêtre. */
  url: string;
  largeur: number;
  hauteur: number;
}

export interface Point {
  titre: string;
  texte: string;
}

export interface ModuleSection {
  id: string;
  nav: string;
  kicker: string;
  titre: string;
  intro: string;
  points?: Point[];
  puces?: string[];
  shot: Shot;
  shot2?: Shot;
}

export interface ModuleContent {
  key: ModuleKey;
  num: string;
  nom: string;
  nomLong: string;
  couleur: string;
  icone: string;
  resume: string;
  accroche: string;
  titre: string;
  intro: string;
  cles: { icone: string; texte: string }[];
  apercu: string[];
  hero: Shot;
  sections: ModuleSection[];
  seo: { titre: string; description: string };
}

const S = 'assets/rfidia/screens/';

function shot(
  fichier: string,
  largeur: number,
  hauteur: number,
  url: string,
  titre: string,
  legende: string,
  alt?: string
): Shot {
  return { src: S + fichier, largeur, hauteur, url, titre, legende, alt: alt ?? `${titre} ${legende}` };
}

export const MODULES: Record<ModuleKey, ModuleContent> = {
  finance: {
    key: 'finance',
    num: '01',
    nom: 'Finance',
    nomLong: 'Finance',
    couleur: 'var(--rf-finance)',
    icone: 'bi-graph-up-arrow',
    resume: 'Ventes, achats, stock, comptabilité',
    accroche:
      'De la première proposition commerciale jusqu’aux états financiers de fin d’exercice, toute l’activité est suivie au même endroit.',
    titre: 'Des ventes jusqu’au bilan, des chiffres toujours à jour',
    intro:
      'Devis, factures, achats, stock, trésorerie et comptabilité reliés entre eux : ce qui est saisi une fois alimente le reste, et le dirigeant voit où en est l’entreprise sans attendre la clôture.',
    cles: [
      { icone: 'bi-link-45deg', texte: 'Ventes, achats et stock reliés' },
      { icone: 'bi-bank', texte: 'Trésorerie et TVA suivies en continu' },
      { icone: 'bi-journal-text', texte: 'Comptabilité générale et analytique' },
    ],
    apercu: [
      'Devis, factures, avoirs, bons de livraison',
      'Factures fournisseur lues automatiquement',
      'Stock par dépôt, mouvements tracés',
      'Trésorerie, TVA, compte de résultat',
      'Comptabilité générale et analytique',
    ],
    hero: shot(
      'f-dashboard.webp', 2000, 1250, 'finances.tagstream.com.tn/dashboard',
      'Tableau de bord financier.',
      'Revenus, dépenses, résultat et taux de marge du mois, comparés au mois précédent.'
    ),
    sections: [
      {
        id: 'pilotage',
        nav: 'Pilotage',
        kicker: 'Pilotage',
        titre: 'Savoir où en est l’entreprise, sans attendre la clôture',
        intro:
          'Dès l’ouverture, le dirigeant voit ce qui est entré, ce qui est sorti et ce qu’il reste. Chaque indicateur est comparé à la période précédente pour repérer tout de suite une tendance qui se dégrade.',
        points: [
          { titre: 'Ventes et achats sur douze mois', texte: 'À côté des dernières factures et de leur état de règlement : payée, partielle ou impayée.' },
          { titre: 'Revenus et dépenses', texte: 'Évolution mois par mois, balance de la période et revenus par catégorie de vente.' },
        ],
        shot: shot(
          'f-revdep.webp', 2000, 1250, 'finances.tagstream.com.tn/rapports',
          'Revenus et dépenses.',
          'Évolution mois par mois, balance de la période et revenus par catégorie de vente.'
        ),
        shot2: shot(
          'f-bloc-ventes.webp', 2000, 838, 'finances.tagstream.com.tn/dashboard',
          'Ventes et achats sur douze mois.',
          'Les dernières factures et leur état de règlement.'
        ),
      },
      {
        id: 'ventes',
        nav: 'Ventes',
        kicker: 'Ventes et facturation',
        titre: 'Des documents commerciaux justes, envoyés à temps',
        intro:
          'Devis, factures, avoirs, bons de livraison, bons de sortie et notes de débours sont réunis. Un devis accepté devient facture ou bon de livraison sans rien ressaisir, et chaque type de document suit sa propre numérotation.',
        points: [
          { titre: 'Ce qui est payé, ce qui reste dû', texte: 'Les encaissements par chèque, virement ou espèces sont rattachés à un compte bancaire ou à une caisse.' },
          { titre: 'Sept modèles PDF à vos couleurs', texte: 'Votre logo, votre couleur, vos mentions et votre signature. Envoi par e-mail ou WhatsApp depuis la fiche.' },
          { titre: 'Relances automatiques', texte: 'Vous définissez vos règles une fois ; le client reçoit un e-mail à l’échéance avec le numéro et le montant exact.' },
        ],
        shot: shot(
          'f-facture.webp', 2000, 1250, 'finances.tagstream.com.tn/ventes/factures',
          'Une facture.',
          'Aperçu fidèle au PDF, état du règlement, montant en toutes lettres et actions : paiement, avoir, partage, impression.'
        ),
      },
      {
        id: 'achats',
        nav: 'Achats',
        kicker: 'Achats et fournisseurs',
        titre: 'Moins de saisie, moins d’erreurs sur les dépenses',
        intro:
          'Déposez le PDF ou prenez la facture en photo depuis le téléphone : fournisseur, numéro, date, lignes et montants sont lus automatiquement. Il ne reste qu’à vérifier.',
        points: [
          { titre: 'Deux contrôles avant de payer', texte: 'Une alerte si la facture ressemble à une facture déjà enregistrée, ou si un prix s’écarte nettement de vos derniers achats chez ce fournisseur.' },
          { titre: 'Visa « Bon à payer »', texte: 'Avec le cachet et la signature de la société, directement sur la facture fournisseur.' },
        ],
        puces: ['Bons de commande', 'Bons de réception', 'Prestations de service', 'Paiements fournisseurs', 'Retenues à la source'],
        shot: shot(
          'f-factfourn.webp', 2000, 1250, 'finances.tagstream.com.tn/achats/factures',
          'Facture fournisseur.',
          'Lignes, solde à payer et visa « Bon à payer » avec le cachet et la signature de la société.'
        ),
        shot2: shot(
          'f-scan.webp', 2000, 983, 'finances.tagstream.com.tn/achats/scanner',
          'Lecture automatique',
          'd’un fichier ou d’une photo.'
        ),
      },
      {
        id: 'stock',
        nav: 'Stock',
        kicker: 'Stock',
        titre: 'Un stock que l’on peut enfin croire',
        intro:
          'Les quantités se suivent dépôt par dépôt. Une facture ou un bon de livraison retire la marchandise du dépôt choisi ; une réception l’y ajoute.',
        points: [
          { titre: 'Inventaires', texte: 'Le stock théorique et le stock compté sont comparés ; les écarts sont calculés ligne par ligne et exportables.' },
          { titre: 'Étiquettes', texte: 'Codes-barres et QR codes s’impriment depuis la référence, sur planche A4 ou sur rouleau.' },
        ],
        shot: shot(
          'f-articles.webp', 2000, 1250, 'finances.tagstream.com.tn/stock/articles',
          'Catalogue d’articles.',
          'Référence, catégorie, prix, TVA, unité et quantité en stock, pour les produits, les services et les consommables.'
        ),
        shot2: shot(
          'f-mvtstock.webp', 2000, 1410, 'finances.tagstream.com.tn/stock/mouvements',
          'Mouvements de stock',
          'datés, rattachés à un article, à un dépôt et au document d’origine.'
        ),
      },
      {
        id: 'comptabilite',
        nav: 'Comptabilité',
        kicker: 'Rapports et comptabilité',
        titre: 'Des chiffres prêts pour votre expert-comptable',
        intro:
          'Compte de résultat, synthèse de TVA, encaissements : les rapports se lisent sur la période de votre choix et s’exportent.',
        points: [
          { titre: 'Comptabilité générale', texte: 'Plan comptable prêt à l’emploi et personnalisable, journaux, exercices, écritures avec brouillon et validation. Grand livre, balance générale et balance des tiers.' },
          { titre: 'États et actifs', texte: 'Bilan, état de résultat, flux de trésorerie. Immobilisations avec plan d’amortissement, charges et produits différés, analytique par centre.' },
        ],
        shot: shot(
          'f-cr.webp', 2000, 1410, 'finances.tagstream.com.tn/rapports/resultat',
          'Compte de résultat.',
          'Du chiffre d’affaires au résultat, chaque famille de charges rendue visible.'
        ),
        shot2: shot(
          'f-tva.webp', 2000, 1410, 'finances.tagstream.com.tn/rapports/tva',
          'Synthèse de TVA.',
          'TVA collectée, déductible et position de la période.'
        ),
      },
    ],
    seo: {
      titre: 'Finance — facturation, stock et comptabilité',
      description:
        'Devis, factures, achats, stock par dépôt, trésorerie, TVA et comptabilité générale pour les PME de Tunisie et d’Algérie.',
    },
  },

  crm: {
    key: 'crm',
    num: '02',
    nom: 'CRM',
    nomLong: 'CRM terrain',
    couleur: 'var(--rf-crm)',
    icone: 'bi-geo-alt',
    resume: 'Prospection, visites, suivi commercial',
    accroche:
      'Pour les entreprises qui vendent sur le terrain : chaque prospect, chaque visite et chaque devis est suivi du premier contact jusqu’à la facture.',
    titre: 'Ce que font vos commerciaux sur le terrain, visible le jour même',
    intro:
      'La visite se saisit sur place depuis le téléphone, avec une position GPS vérifiée. Le devis qui en sort arrive directement dans la facturation, et l’encadrement suit l’activité par commercial et par région.',
    cles: [
      { icone: 'bi-crosshair', texte: 'Visites confirmées par GPS' },
      { icone: 'bi-arrow-left-right', texte: 'Devis transmis à la Finance' },
      { icone: 'bi-map', texte: 'Indicateurs par gouvernorat' },
    ],
    apercu: [
      'Prospects et contacts centralisés',
      'Visites terrain confirmées par GPS',
      'Devis transmis à la facturation',
      'Rendez-vous, tâches, mémos vocaux',
      'Indicateurs par commercial et par région',
    ],
    hero: shot(
      'c-accueil.webp', 2000, 1250, 'crm.tagstream.com.tn',
      'Accueil du CRM.',
      'Recherche des visites en langage courant et liste des dernières visites de l’équipe.'
    ),
    sections: [
      {
        id: 'visites',
        nav: 'Visites terrain',
        kicker: 'Visites terrain',
        titre: 'Ce qui se passe chez le client, visible le jour même',
        intro:
          'Une nouvelle visite se crée en trois étapes : le client et les personnes rencontrées, le déroulé de la visite, puis la suite à donner. La création est confirmée par la position GPS du commercial.',
        points: [
          { titre: 'Une visite complète', texte: 'Objet, intérêt du client, montant estimé, probabilité de signature, prochaine action et remarques. Une entreprise revisitée garde tout son historique.' },
          { titre: 'Un statut clair', texte: 'À faire, visite technique, présentation, négociation, terminée ou refusée : chacun sait où en est chaque opportunité.' },
          { titre: 'Retrouver sans chercher', texte: 'Il suffit d’écrire « visites à Nabeul cette semaine » ou « visites terminées à Sousse ». Les résultats s’exportent vers Excel.' },
        ],
        shot: shot(
          'c-visite.webp', 2000, 1250, 'crm.tagstream.com.tn/visit-form',
          'Nouvelle visite.',
          'Trois étapes, et une création confirmée par la position GPS du commercial.'
        ),
      },
      {
        id: 'prospects',
        nav: 'Prospects et devis',
        kicker: 'Prospects et devis',
        titre: 'Un portefeuille suivi, des devis qui aboutissent',
        intro:
          'Chaque prospect avance d’un statut à l’autre : à contacter, contacté, rendez-vous pris, préqualifié. Passer à « rendez-vous pris » propose de planifier la visite correspondante.',
        points: [
          { titre: 'Pas de doublons', texte: 'Avant toute création, la plateforme signale un prospect ou une visite qui ressemble à une fiche existante, même avec une orthographe différente.' },
          { titre: 'Devis suivis jusqu’au bout', texte: 'Montants, devis acceptés, en attente et taux d’acceptation. Chaque devis accepté est aussi créé dans la Finance.' },
        ],
        shot: shot(
          'c-prospects.webp', 2000, 1250, 'crm.tagstream.com.tn/prospects',
          'Prospects.',
          'Société, interlocuteur, coordonnées, statut et prochaine action, modifiables directement dans la liste.'
        ),
        shot2: shot(
          'c-devis.webp', 2000, 1281, 'crm.tagstream.com.tn/devis',
          'Suivi des devis',
          'issus des visites.'
        ),
      },
      {
        id: 'organisation',
        nav: 'Organisation',
        kicker: 'Organisation de l’équipe',
        titre: 'Un planning partagé, des tâches qui ne se perdent pas',
        intro:
          'Rendez-vous planifiés, confirmés ou reportés, filtrables par période et par statut, avec des rappels avant chaque visite et des notifications dans l’application.',
        points: [
          { titre: 'Mémos vocaux', texte: 'Le compte rendu s’enregistre à la voix juste après la visite, puis se réécoute pour compléter la fiche.' },
          { titre: 'Contacts partagés', texte: 'Toute l’équipe travaille sur les mêmes contacts, avec des filtres rapides.' },
        ],
        shot: shot(
          'c-taches.webp', 2000, 1250, 'crm.tagstream.com.tn/tasks',
          'Tâches en colonnes.',
          'À faire, en cours, en révision, terminé, avec priorité, échéance, créateur et personne assignée.'
        ),
        shot2: shot(
          'c-agenda.webp', 1608, 804, 'crm.tagstream.com.tn/rendez-vous',
          'Agenda et priorités.',
          'Les prochains rendez-vous, avec l’interlocuteur, le lieu et la durée.'
        ),
      },
      {
        id: 'pilotage',
        nav: 'Pilotage',
        kicker: 'Pilotage commercial',
        titre: 'Voir où l’on vend, et où l’on pourrait vendre',
        intro:
          'Visites, rendez-vous, prospects, montants engagés, probabilité moyenne de signature et actions acceptées sont recalculés à chaque ouverture. Les graphiques montrent l’activité mensuelle, la charge par jour et les entreprises les plus visitées.',
        points: [
          { titre: 'Chacun voit son périmètre', texte: 'Un commercial suit ses propres chiffres ; l’encadrement voit l’ensemble de l’équipe.' },
          { titre: 'Le catalogue en rendez-vous', texte: 'Photos, références, prix et disponibilité, à portée de main pendant la visite.' },
        ],
        shot: shot(
          'c-catalogue.webp', 2000, 1250, 'crm.tagstream.com.tn/catalogue',
          'Catalogue produits.',
          'Photos, références, prix et disponibilité, à portée de main pendant le rendez-vous.'
        ),
        shot2: shot(
          'c-carte.webp', 1370, 1452, 'crm.tagstream.com.tn/analytics',
          'Carte par gouvernorat.',
          'Clients, prospects et visites de chaque région, avec l’intensité de l’activité.'
        ),
      },
    ],
    seo: {
      titre: 'CRM terrain — visites, prospects et devis',
      description:
        'Visites terrain confirmées par GPS, prospects, devis transmis à la facturation et pilotage par gouvernorat pour les équipes commerciales.',
    },
  },

  rh: {
    key: 'rh',
    num: '03',
    nom: 'RH',
    nomLong: 'Ressources humaines',
    couleur: 'var(--rf-rh)',
    icone: 'bi-people',
    resume: 'Personnel, temps de travail, paie',
    accroche:
      'Le dossier de chaque salarié, son temps de travail, ses congés et sa paie, réunis dans un même outil et reliés à la comptabilité.',
    titre: 'Une paie calculée en quelques minutes, sans tableur',
    intro:
      'Le bulletin se calcule à partir du contrat, des absences et des avances en cours. Une fois validée, la paie est comptabilisée en une seule opération.',
    cles: [
      { icone: 'bi-clock-history', texte: 'Pointage des arrivées et départs' },
      { icone: 'bi-calendar-check', texte: 'Congés validés en ligne' },
      { icone: 'bi-cash-coin', texte: 'Paie calculée et comptabilisée' },
    ],
    apercu: [
      'Dossiers employés et contrats',
      'Pointage et suivi des présences',
      'Congés, soldes et autorisations',
      'Bulletins de paie, avances et prêts',
      'Paie comptabilisée sans ressaisie',
    ],
    hero: shot(
      'r-accueil.webp', 2000, 1250, 'rh.tagstream.com.tn',
      'Tableau de bord RH.',
      'Effectif, présents du jour, congés en cours, actions rapides et liste « Qui est là ? ».'
    ),
    sections: [
      {
        id: 'personnel',
        nav: 'Personnel',
        kicker: 'Personnel',
        titre: 'Un dossier à jour pour chaque salarié',
        intro:
          'Code, poste, département, coordonnées, date d’embauche et statut : l’équipe se consulte d’un coup d’œil, et chaque contrat reste attaché au salarié.',
        points: [
          { titre: 'Contrats', texte: 'CDI, CDD, SIVP ou stage, avec heures hebdomadaires et majoration des heures supplémentaires. Filtres par contrats en cours, expirés ou résiliés.' },
          { titre: 'Organisation', texte: 'Départements et intitulés de poste, rattachement de chaque salarié. L’annuaire se consulte depuis la Finance, sans accès aux données de paie.' },
        ],
        shot: shot(
          'r-employes.webp', 2000, 1250, 'rh.tagstream.com.tn/employes',
          'Synthèse des employés.',
          'Code, poste, département, coordonnées, date d’embauche et statut.'
        ),
        shot2: shot(
          'r-contrats.webp', 2000, 1410, 'rh.tagstream.com.tn/contrats',
          'Contrats.',
          'Type, début, fin, salaire brut et statut.'
        ),
      },
      {
        id: 'temps',
        nav: 'Temps de travail',
        kicker: 'Temps de travail et absences',
        titre: 'Qui est là, qui est absent, qui part en congé',
        intro:
          'Effectif, présents, absents et taux de présence du jour : l’arrivée et le départ se pointent depuis la liste.',
        points: [
          { titre: 'Présences', texte: 'Historique jour par jour, par salarié ou par département, heures travaillées et retards, pour préparer la paie sans ressaisie.' },
          { titre: 'Congés', texte: 'Types configurables — annuel, maladie, maternité, sans solde —, solde de chaque salarié, demandes approuvées ou refusées.' },
          { titre: 'Autorisations de sortie', texte: 'Plage horaire, durée, motif et décision, avec le même circuit de validation que les congés.' },
        ],
        shot: shot(
          'r-pointage.webp', 2000, 1250, 'rh.tagstream.com.tn/pointage',
          'Supervision du pointage.',
          'Effectif, présents, absents et taux de présence du jour.'
        ),
        shot2: shot(
          'r-autorisations.webp', 2000, 726, 'rh.tagstream.com.tn/autorisations',
          'Autorisations de sortie.',
          'Plage horaire, durée, motif et décision.'
        ),
      },
      {
        id: 'paie',
        nav: 'Paie',
        kicker: 'Paie',
        titre: 'Vous gardez la main sur chaque décision',
        intro:
          'Choix du salarié et de la période, décisions de paie, puis aperçu du bulletin : salaire de base, brut imposable, cotisation CNSS, retenue d’impôt et net à payer.',
        points: [
          { titre: 'Des choix explicites', texte: 'Payer le mois complet ou non, inclure les heures supplémentaires, déduire les congés sans solde ou les absences injustifiées, appliquer une pénalité de retard : tout est visible avant de générer le bulletin.' },
          { titre: 'Un salarié ou toute l’équipe', texte: 'Les bulletins se génèrent salarié par salarié, ou pour tous les employés actifs en une seule opération.' },
        ],
        shot: shot(
          'r-paie.webp', 2000, 1250, 'rh.tagstream.com.tn/paie',
          'Exécution de la paie.',
          'Décisions de paie et aperçu du bulletin avant génération.'
        ),
      },
      {
        id: 'bulletins',
        nav: 'Bulletins et comptabilité',
        kicker: 'Bulletins, avances et comptabilité',
        titre: 'Du bulletin au virement, puis à la comptabilité',
        intro:
          'Le tableau de bord de paie donne la masse salariale, les cotisations retenues et le net versé du mois. Le bouton « Comptabiliser » génère l’écriture de paie.',
        points: [
          { titre: 'Avances et prêts', texte: 'Montant, mensualité et progression du remboursement, déduit automatiquement de chaque bulletin.' },
          { titre: 'Paiements', texte: 'Virement des salaires, versement des cotisations CNSS et de l’impôt retenu, chacun rattaché au compte bancaire choisi.' },
          { titre: 'Paramétrage comptable', texte: 'Journal et comptes de charges, de cotisations et de personnel définis une fois pour toutes.' },
        ],
        shot: shot(
          'r-bulletins.webp', 2000, 1410, 'rh.tagstream.com.tn/paie/bulletins',
          'Bulletins du mois.',
          'Brut imposable, net à payer et statut de chaque bulletin, puis comptabilisation.'
        ),
        shot2: shot(
          'r-avances.webp', 2000, 641, 'rh.tagstream.com.tn/paie/avances',
          'Avances et prêts.',
          'Remboursement déduit de chaque bulletin.'
        ),
      },
    ],
    seo: {
      titre: 'RH — personnel, congés et paie',
      description:
        'Dossiers salariés, contrats, pointage, congés, autorisations et paie comptabilisée automatiquement, en français ou en arabe.',
    },
  },
};

export const MODULE_ORDER: ModuleKey[] = ['finance', 'crm', 'rh'];
