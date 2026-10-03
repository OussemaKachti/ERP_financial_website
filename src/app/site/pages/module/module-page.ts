import {
  Component,
  ChangeDetectionStrategy,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE } from '../../site.config';
import { EMAIL, MODULES, MODULE_ORDER, ModuleKey } from '../../data/modules';
import { FLUX } from '../../data/home';
import { OFFRES, promotionActive } from '../../data/pricing';
import { AppWindow } from '../../shared/app-window';
import { FaqList } from '../../shared/faq-list';

/** Offre d'entrée mise en avant sur chaque page d'application. */
const OFFRE_ENTREE: Record<ModuleKey, string> = { finance: 'erp', crm: 'bundle', rh: 'rh' };

@Component({
  selector: 'rf-module-page',
  standalone: true,
  imports: [RouterLink, AppWindow, FaqList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './module-page.html',
})
export class ModulePage {
  protected readonly site = SITE;
  protected readonly m = MODULES;
  protected readonly mod = MODULES[inject(ActivatedRoute).snapshot.data['module'] as ModuleKey];
  protected readonly section = signal(this.mod.sections[0].id);
  protected readonly email = EMAIL;
  protected readonly couleur = EMAIL[this.mod.key];

  protected readonly autres = MODULE_ORDER.filter((k) => k !== this.mod.key).map((k) => MODULES[k]);
  protected readonly flux = FLUX.filter((f) => f.de === this.mod.key || (f.vers === this.mod.key && f.de !== f.vers));

  protected readonly offre = computed(() => {
    const o = OFFRES.find((x) => x.cle === OFFRE_ENTREE[this.mod.key])!;
    const promo = promotionActive();
    return { nom: o.nom, prix: promo ? o.promo.mensuel : o.tarif.mensuel, promo };
  });

  constructor() {
    const hote = inject(ElementRef<HTMLElement>);
    const destroy = inject(DestroyRef);

    // Onglet actif de la navigation secondaire selon la section visible
    afterNextRender(() => {
      const cibles = Array.from(hote.nativeElement.querySelectorAll('.rf-feature')) as HTMLElement[];
      const obs = new IntersectionObserver(
        (entrees) => {
          const visible = entrees.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
          if (visible) this.section.set(visible.target.id);
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      cibles.forEach((c) => obs.observe(c));
      destroy.onDestroy(() => obs.disconnect());
    });
  }

  aller(id: string, evt: Event): void {
    evt.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.section.set(id);
  }
}
