import { FAQ_ACCUEIL, FAQ_TARIFS, Question } from './home';
import { MODULES } from './modules';

/** Toutes les questions, rangées par thème pour la page « Questions ». */
export const FAQ_THEMES: { id: string; titre: string; questions: Question[] }[] = [
  {
    id: 'demarrer',
    titre: 'Démarrer',
    questions: [
      FAQ_ACCUEIL[0],
      {
        q: 'Combien de temps faut-il pour démarrer ?',
        r: [
          'Créer le compte et décrire la société — raison sociale, identifiant fiscal, adresse, logo et devise — prend quelques minutes. Le plan comptable standard et les types de congés usuels se mettent en place en une seule opération : l’essentiel du paramétrage est fait avant la première facture.',
        ],
      },
      FAQ_ACCUEIL[3],
      FAQ_ACCUEIL[1],
    ],
  },
  {
    id: 'applications',
    titre: 'Les trois applications',
    questions: [...MODULES.finance.faq.slice(0, 2), ...MODULES.crm.faq.slice(0, 2), ...MODULES.rh.faq.slice(0, 3)],
  },
  {
    id: 'donnees',
    titre: 'Données et accès',
    questions: [
      FAQ_ACCUEIL[2],
      {
        q: 'Qui voit quoi dans l’entreprise ?',
        r: [
          'Chaque collaborateur reçoit un rôle — propriétaire, administrateur ou collaborateur — et ne voit que les applications souscrites par sa société et ce que son rôle permet. Un commercial suit ses propres chiffres ; l’encadrement voit l’ensemble de l’équipe.',
        ],
      },
      {
        q: 'Puis-je gérer plusieurs sociétés ?',
        r: ['Oui. Un dirigeant qui gère plusieurs entreprises bascule de l’une à l’autre depuis le même accès. Les données de chaque société restent séparées.'],
      },
      {
        q: 'Faut-il un identifiant par application ?',
        r: ['Non. Un seul identifiant ouvre les trois applications : on passe de la Finance au CRM ou aux RH sans se reconnecter.'],
      },
    ],
  },
  {
    id: 'pays',
    titre: 'Langues, devises et fiscalité',
    questions: [
      FAQ_ACCUEIL[5],
      FAQ_ACCUEIL[4],
      {
        q: 'Taxes, timbre et retenue à la source sont-ils gérés ?',
        r: ['Oui. Taxes, timbre fiscal, retenue à la source, numérotation et mentions légales se règlent pour chaque société.'],
      },
    ],
  },
  {
    id: 'tarifs',
    titre: 'Tarifs et abonnement',
    questions: FAQ_TARIFS,
  },
];
