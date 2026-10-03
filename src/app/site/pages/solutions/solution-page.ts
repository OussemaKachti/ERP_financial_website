import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE } from '../../site.config';
import { EMAIL, MODULES } from '../../data/modules';
import { SOLUTIONS } from '../../data/solutions';
import { OFFRES, promotionActive } from '../../data/pricing';
import { AppWindow } from '../../shared/app-window';

/** Index des solutions par métier, et page de chaque métier. */
@Component({
  selector: 'rf-solution-page',
  standalone: true,
  imports: [RouterLink, AppWindow],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './solution-page.html',
})
export class SolutionPage {
  protected readonly site = SITE;
  protected readonly m = MODULES;
  protected readonly email = EMAIL;
  protected readonly solutions = SOLUTIONS;

  private readonly slug = signal<string | null>(inject(ActivatedRoute).snapshot.data['solution'] ?? null);
  protected readonly sol = computed(() => SOLUTIONS.find((s) => s.slug === this.slug()) ?? null);
  protected readonly autres = computed(() => SOLUTIONS.filter((s) => s.slug !== this.slug()));

  protected readonly offre = computed(() => {
    const s = this.sol();
    if (!s) return null;
    const o = OFFRES.find((x) => x.cle === s.offre)!;
    return { nom: o.nom, prix: promotionActive() ? o.promo.mensuel : o.tarif.mensuel };
  });
}
