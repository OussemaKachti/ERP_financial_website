import { Component, ChangeDetectionStrategy, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE } from '../site.config';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'rf-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-header.html',
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly themeService = inject(ThemeService);
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  protected readonly liens = [
    { lien: '/finance', label: 'Finance', couleur: 'var(--rf-finance)' },
    { lien: '/crm', label: 'CRM', couleur: 'var(--rf-crm)' },
    { lien: '/rh', label: 'RH', couleur: 'var(--rf-rh)' },
    { lien: '/tarifs', label: 'Tarifs', couleur: '' },
  ];

  constructor() {
    inject(Router)
      .events.pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.fermer());
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  fermer(): void {
    this.open.set(false);
    document.body.style.overflow = '';
  }

  basculerMenu(): void {
    const ouvert = !this.open();
    this.open.set(ouvert);
    document.body.style.overflow = ouvert ? 'hidden' : '';
  }
}
