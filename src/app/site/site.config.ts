/**
 * Réglages du site commercial. Tout ce qui dépend d'une décision commerciale
 * (nom, coordonnées, liens vers les applications) est réuni ici.
 */
export const SITE = {
  /** Nom affiché. Le nom commercial définitif n'est pas encore arrêté. */
  nom: 'RFIDIA',
  editeur: 'RFIDIA Technology',

  /** Applications en ligne. */
  apps: {
    finance: 'https://finances.tagstream.com.tn',
    crm: 'https://crm.tagstream.com.tn',
    rh: 'https://rh.tagstream.com.tn',
  },

  /** Page de choix des plateformes (bouton « Connexion »). */
  connexion: 'https://finances.tagstream.com.tn/platforms',

  /** Création de compte et ouverture de l'essai gratuit. */
  inscription: 'https://finances.tagstream.com.tn/auth/auth1/register',

  /**
   * Coordonnées commerciales. Laissées vides tant qu'elles ne sont pas
   * validées : les blocs correspondants ne s'affichent pas.
   */
  contact: {
    email: 'rfidia@rfidia.com',
    /** Interlocutrice commerciale. */
    emailCommercial: 'e.saoussen@rfidia.com',
    telephones: ['+216 94 103 351', '+216 98 268 262'],
    adresse: ['Hannibal Park, Africa Mall', 'Av. Mustapha Hjeij', 'Ariana 1002, Tunisie'],
    /** Lien Google Maps de l'adresse. */
    carte: 'https://www.google.com/maps/search/?api=1&query=Hannibal+Park+Africa+Mall+Ariana',
    horaires: 'Du lundi au vendredi, de 8 h 30 à 17 h 30',
  },

  /**
   * Chiffres affichés sur le site.
   * ⚠ `entreprises` est PROVISOIRE (donné le 3 octobre 2026) : à vérifier
   * avant toute campagne, il apparaît sur l'accueil et la page À propos.
   */
  preuves: {
    entreprises: 600,
  },

  /** Film commercial (1 min 37) et extrait muet en boucle. */
  film: {
    hd: 'assets/rfidia/video/rfidia-film-1080.mp4',
    sd: 'assets/rfidia/video/rfidia-film-720.mp4',
    boucle: 'assets/rfidia/video/rfidia-boucle.mp4',
    affiche: 'assets/rfidia/video/rfidia-film-poster.jpg',
    duree: '1 min 37',
  },

  /**
   * Réception des demandes de démonstration.
   * - `endpoint` : URL qui reçoit la demande en POST JSON (à terme, l'entrée
   *   des prospects dans le CRM).
   * - sans endpoint, la demande est préparée dans la messagerie du visiteur,
   *   adressée à `contact.email`.
   */
  demo: {
    endpoint: '',
  },

  /**
   * Grille tarifaire publique de l'API (GET /offres-publiques). Si elle est
   * renseignée, la page Tarifs affiche les prix du serveur ; sinon, ceux de
   * `data/pricing.ts`. Le domaine du site doit être ajouté aux origines CORS
   * autorisées par l'API.
   */
  offresPubliquesUrl: '',
} as const;
