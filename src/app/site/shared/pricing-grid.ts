import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { SITE } from '../site.config';
import { CONDITIONS, Offre, PROMOTION } from '../data/pricing';
import { PricingService } from '../services/pricing.service';

type Periode = 'mensuel' | 'annuel';

@Component({
  selector: 'rf-pricing-grid',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="z-price-top">
      <div class="z-seg" role="group" aria-label="Périodicité">
        <button type="button" [class.active]="periode() === 'mensuel'" [attr.aria-pressed]="periode() === 'mensuel'"
          (click)="periode.set('mensuel')">Mensuel</button>
        <button type="button" [class.active]="periode() === 'annuel'" [attr.aria-pressed]="periode() === 'annuel'"
          (click)="periode.set('annuel')">Annuel</button>
      </div>
      @if (pricing.promotion()) {
        <p class="z-launch">
          <span class="z-tag" style="--c: var(--z-rh)">{{ promotion.libelle }}</span>
          <span>Prix réduits pour toute signature jusqu’au <strong>{{ promotion.finLisible }}</strong>.</span>
        </p>
      }
    </div>

    <div class="z-mosaic z-prices">
      @for (o of cartes(); track o.cle) {
        <article class="z-tile z-price" [class.is-featured]="o.miseEnAvant">
          <div class="z-price-mods" aria-hidden="true">
            @for (m of o.modules; track m) {
              <span class="z-chip" [style.--c]="couleur[m]"></span>
            }
          </div>
          <h3 class="z-price-name">{{ o.nom }}</h3>
          <p class="z-price-tagline">{{ o.tagline }}</p>

          <p class="z-price-amount">
            <span class="z-num">{{ o.prix }}</span>
            <span class="unit">DT HT / {{ periode() === 'mensuel' ? 'mois' : 'an' }}</span>
          </p>
          <p class="z-price-was">
            @if (o.barre) {
              <s class="z-num">{{ o.barre }} DT</s> prix normal
            } @else if (periode() === 'annuel' && o.economie > 0) {
              <span class="z-num">{{ o.economie }} DT</span> d’économie sur l’année
            } @else {
              &nbsp;
            }
          </p>

          <ul class="z-price-list">
            @for (p of o.points; track p) {
              <li>{{ p }}</li>
            }
          </ul>

          <a [href]="site.inscription" class="z-btn w-100" [class.z-btn--light]="o.miseEnAvant" [class.z-btn--ghost]="!o.miseEnAvant">
            Commencer l’essai
          </a>
        </article>
      }
    </div>

    <p class="z-price-cond">
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
  protected readonly couleur: Record<string, string> = { finance: 'var(--z-finance)', crm: 'var(--z-crm)', rh: 'var(--z-rh)' };
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
