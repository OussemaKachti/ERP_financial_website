import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';

@Component({
  selector: 'rf-site-layout',
  standalone: true,
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="z-site">
      <a class="visually-hidden-focusable position-fixed top-0 start-0 m-2 z-btn" style="z-index: 1100" href="#contenu">Aller au contenu</a>
      <rf-site-header />
      <main id="contenu">
        <router-outlet />
      </main>
      <rf-site-footer />
    </div>
  `,
})
export class SiteLayout {}
