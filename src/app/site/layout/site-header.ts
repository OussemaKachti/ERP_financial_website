import { Component, ChangeDetectionStrategy, HostListener, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE } from '../site.config';
import { ThemeService } from '../services/theme.service';
import { NAV_PRINCIPALE } from '../data/navigation';

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

  protected readonly liens = NAV_PRINCIPALE;

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
