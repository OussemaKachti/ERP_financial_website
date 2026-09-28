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
    email: '',
    telephone: '',
    adresse: '',
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
