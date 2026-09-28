import { Component, ChangeDetectionStrategy, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site.config';
import { MODULES, MODULE_ORDER } from '../../data/modules';
import { ETAPES, FAQ_ACCUEIL, FLUX, GALERIE, METIERS, PILIERS, SITUATIONS } from '../../data/home';
import { AppWindow } from '../../shared/app-window';
import { PricingGrid } from '../../shared/pricing-grid';
import { FaqList } from '../../shared/faq-list';
import { CtaBand } from '../../shared/cta-band';

/** Durée d'affichage de chaque application dans le hero (ms). */
const DUREE = 6000;
const PAS = 100;

@Component({
  selector: 'rf-home',
  standalone: true,
  imports: [RouterLink, AppWindow, PricingGrid, FaqList, CtaBand],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  protected readonly site = SITE;
  protected readonly modules = MODULE_ORDER.map((k) => MODULES[k]);
  protected readonly m = MODULES;
  protected readonly situations = SITUATIONS;
  protected readonly galerie = GALERIE;
  protected readonly flux = FLUX;
  protected readonly piliers = PILIERS;
  protected readonly metiers = METIERS;
  protected readonly etapes = ETAPES;
  protected readonly faq = FAQ_ACCUEIL;

  // Hero : rotation automatique entre les trois applications
  protected readonly actif = signal(0);
  protected readonly auto = signal(true);
  protected readonly enPause = signal(false);
  private ecoule = 0;

  // Galerie
  private readonly piste = viewChild<ElementRef<HTMLElement>>('piste');
  protected readonly debut = signal(true);
  protected readonly fin = signal(false);

  constructor() {
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduit) {
      this.auto.set(false);
      return;
    }
    const minuterie = setInterval(() => {
      if (!this.auto() || this.enPause() || document.hidden) return;
      this.ecoule += PAS;
      if (this.ecoule >= DUREE) {
        this.ecoule = 0;
        this.actif.update((i) => (i + 1) % this.modules.length);
      }
    }, PAS);
    inject(DestroyRef).onDestroy(() => clearInterval(minuterie));
  }

  choisir(i: number): void {
    this.actif.set(i);
    this.auto.set(false);
  }

  defiler(sens: 1 | -1): void {
    const el = this.piste()?.nativeElement;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('.rf-gallery-item');
    const pas = item ? item.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: sens * pas, behavior: 'smooth' });
  }

  majGalerie(): void {
    const el = this.piste()?.nativeElement;
    if (!el) return;
    this.debut.set(el.scrollLeft < 8);
    this.fin.set(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }
}
