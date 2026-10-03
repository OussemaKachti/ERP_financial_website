import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { SITE } from '../site.config';
import { CONDITIONS, Offre, PROMOTION } from '../data/pricing';
import { MODULES } from '../data/modules';
import { PricingService } from '../services/pricing.service';

type Periode = 'mensuel' | 'annuel';

@Component({
  selector: 'rf-pricing-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="d-flex flex-column align-items-center gap-3 mb-5">
      <div class="rf-billing-toggle" role="group" aria-label="Périodicité">
        <button type="button" [class.active]="periode() === 'mensuel'" [attr.aria-pressed]="periode() === 'mensuel'"
          (click)="periode.set('mensuel')">Mensuel</button>
        <button type="button" [class.active]="periode() === 'annuel'" [attr.aria-pressed]="periode() === 'annuel'"
          (click)="periode.set('annuel')">Annuel</button>
      </div>
      @if (pricing.promotion()) {
        <p class="rf-launch mb-0">
          <span class="rf-tag" style="--c: var(--rf-rose)">{{ promotion.libelle }}</span>
          <span>Prix réduits pour toute signature jusqu’au <strong>{{ promotion.finLisible }}</strong>.</span>
        </p>
      }
    </div>

    <div class="row g-4 justify-content-center">
      @for (o of cartes(); track o.cle) {
        <div class="col-md-6 col-xl-3">
          <article class="rf-price-card" [class.is-featured]="o.miseEnAvant">
            @if (o.miseEnAvant) {
              <span class="rf-price-card-flag">Les trois applications</span>
            }
            <div class="rf-price-card-modules" aria-hidden="true">
              @for (m of o.modules; track m) {
                <span class="rf-mod-chip" [style.--c]="modules[m].couleur"><i class="bi" [class]="modules[m].icone"></i></span>
              }
            </div>
            <h3 class="rf-price-card-name">{{ o.nom }}</h3>
            <p class="rf-price-card-tagline mb-0">{{ o.tagline }}</p>

            <div class="rf-price-card-price">
              <span class="amount">{{ o.prix }}</span>
              <span class="unit">DT HT / {{ periode() === 'mensuel' ? 'mois' : 'an' }}</span>
            </div>
            <div class="rf-price-card-was">
              @if (o.barre) {
                <s>{{ o.barre }} DT</s> <span class="ms-1">prix normal</span>
              } @else if (periode() === 'annuel' && o.economie > 0) {
                <span class="save">{{ o.economie }} DT d’économie sur l’année</span>
              }
            </div>

            <ul class="rf-check-list">
              @for (p of o.points; track p) {
                <li>{{ p }}</li>
              }
            </ul>

            <a [href]="site.inscription" class="btn w-100 mb-0" [class.btn-primary]="o.miseEnAvant" [class.btn-rf-ghost]="!o.miseEnAvant">
              Commencer l’essai
            </a>
          </article>
        </div>
      }
    </div>

    <p class="text-center rf-muted small mt-4 mb-0">
      {{ conditions }}
      @if (pricing.promotion()) {
        <br class="d-none d-md-inline"> {{ promotion.conditions }}
      }
    </p>
  `,
})
export class PricingGrid {
  protected readonly pricing = inject(PricingService);
  protected readonly site = SITE;
  protected readonly modules = MODULES;
  protected readonly promotion = PROMOTION;
  protected readonly conditions = CONDITIONS;
  protected readonly periode = signal<Periode>('mensuel');

  protected readonly cartes = computed(() => {
    const periode = this.periode();
    const promo = this.pricing.promotion();
    return this.pricing.offres().map((o: Offre) => {
      const prix = promo ? o.promo[periode] : o.tarif[periode];
      const normal = o.tarif[periode];
      const applicable = promo ? o.promo : o.tarif;
      return {
        ...o,
        prix,
        barre: promo && normal !== prix ? normal : null,
        economie: Math.max(0, applicable.mensuel * 12 - applicable.annuel),
      };
    });
  });

  constructor() {
    this.pricing.charger();
  }
}
