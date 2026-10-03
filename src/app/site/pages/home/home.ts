import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site.config';
import { EMAIL, MODULES, MODULE_ORDER, ModuleKey } from '../../data/modules';
import { FAQ_ACCUEIL, SITUATIONS } from '../../data/home';
import { BRICOLAGE, FAITS, PARCOURS, ROLES } from '../../data/accueil';
import { OFFRES, promotionActive } from '../../data/pricing';
import { SOLUTIONS } from '../../data/solutions';
import { AppWindow } from '../../shared/app-window';
import { PricingGrid } from '../../shared/pricing-grid';
import { FaqList } from '../../shared/faq-list';
import { Rosette } from '../../shared/rosette';
import { Film } from '../../shared/film';

@Component({
  selector: 'rf-home',
  standalone: true,
  imports: [RouterLink, AppWindow, PricingGrid, FaqList, Rosette, Film],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  protected readonly site = SITE;
  protected readonly m = MODULES;
  protected readonly email = EMAIL;
  protected readonly modules = MODULE_ORDER.map((k) => MODULES[k]);
  protected readonly situations = SITUATIONS;
  protected readonly bricolage = BRICOLAGE;
  protected readonly parcours = PARCOURS;
  protected readonly roles = ROLES;
  protected readonly faits = FAITS;
  protected readonly faq = FAQ_ACCUEIL;
  protected readonly solutions = SOLUTIONS;

  /** Application mise en avant dans la rosace (survol ou focus). */
  protected readonly survol = signal<ModuleKey | null>(null);

  /** Écran affiché dans la section « lundi matin ». */
  protected readonly ecran = signal<ModuleKey>('finance');

  /** Rôle affiché. */
  protected readonly role = signal(ROLES[0].id);
  protected readonly roleActif = computed(() => ROLES.find((r) => r.id === this.role())!);

  /** Prix d'entrée, pour la ligne de réassurance du hero. */
  protected readonly prixEntree = Math.min(
    ...OFFRES.map((o) => (promotionActive() ? o.promo.mensuel : o.tarif.mensuel))
  );
}
