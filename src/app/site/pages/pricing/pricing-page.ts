import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PricingGrid } from '../../shared/pricing-grid';
import { FaqList } from '../../shared/faq-list';
import { CtaBand } from '../../shared/cta-band';
import { FAQ_TARIFS } from '../../data/home';
import { MODULES } from '../../data/modules';

type Colonne = 'erp' | 'rh' | 'erp_rh' | 'bundle';

interface Ligne {
  texte: string;
  offres: Colonne[];
}

const FINANCE: Colonne[] = ['erp', 'erp_rh', 'bundle'];
const RH: Colonne[] = ['rh', 'erp_rh', 'bundle'];
const CRM: Colonne[] = ['bundle'];
const TOUTES: Colonne[] = ['erp', 'rh', 'erp_rh', 'bundle'];

@Component({
  selector: 'rf-pricing-page',
  standalone: true,
  imports: [RouterLink, PricingGrid, FaqList, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pricing-page.html',
})
export class PricingPage {
  protected readonly faq = FAQ_TARIFS;
  protected readonly m = MODULES;
  protected readonly colonnes: { cle: Colonne; nom: string }[] = [
    { cle: 'erp', nom: 'Finance' },
    { cle: 'rh', nom: 'RH' },
    { cle: 'erp_rh', nom: 'Finance + RH' },
    { cle: 'bundle', nom: 'Suite complète' },
  ];

  protected readonly groupes: { titre: string; couleur: string; lignes: Ligne[] }[] = [
    {
      titre: 'Finance',
      couleur: 'var(--rf-finance)',
      lignes: [
        { texte: 'Devis, factures, avoirs et bons de livraison', offres: FINANCE },
        { texte: 'Achats et lecture automatique des factures fournisseur', offres: FINANCE },
        { texte: 'Stock par dépôt, mouvements et inventaires', offres: FINANCE },
        { texte: 'Trésorerie, TVA et relances automatiques', offres: FINANCE },
        { texte: 'Comptabilité générale, analytique et états financiers', offres: FINANCE },
      ],
    },
    {
      titre: 'Ressources humaines',
      couleur: 'var(--rf-rh)',
      lignes: [
        { texte: 'Dossiers employés et contrats', offres: RH },
        { texte: 'Pointage, présences, congés et autorisations', offres: RH },
        { texte: 'Paie, bulletins, avances et prêts', offres: RH },
      ],
    },
    {
      titre: 'CRM terrain',
      couleur: 'var(--rf-crm)',
      lignes: [
        { texte: 'Prospects, contacts et visites confirmées par GPS', offres: CRM },
        { texte: 'Devis de visite transmis à la Finance', offres: CRM },
        { texte: 'Rendez-vous, tâches et mémos vocaux', offres: CRM },
        { texte: 'Pilotage par commercial et par gouvernorat', offres: CRM },
      ],
    },
    {
      titre: 'Plateforme',
      couleur: 'var(--rf-ink)',
      lignes: [
        { texte: 'Un seul compte pour toutes les applications souscrites', offres: TOUTES },
        { texte: 'Plusieurs sociétés, données séparées', offres: TOUTES },
        { texte: 'Interface en français ou en arabe (Finance et RH)', offres: TOUTES },
        { texte: 'Paie comptabilisée automatiquement', offres: ['erp_rh', 'bundle'] },
        { texte: 'Support prioritaire', offres: ['bundle'] },
      ],
    },
  ];
}
