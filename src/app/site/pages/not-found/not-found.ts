import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rf-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="z-404">
      <div class="container">
        <div class="z-404-tile" aria-hidden="true"><span></span><span></span><span></span></div>
        <h1 class="z-h1">Il manque une pièce.</h1>
        <p class="z-lead mx-auto">Cette page n’existe pas, ou plus. Les pages ci-dessous, elles, sont bien à leur place.</p>
        <div class="d-flex flex-wrap justify-content-center gap-2 mt-4">
          <a routerLink="/" class="z-btn">Accueil</a>
          <a routerLink="/finance" class="z-btn z-btn--ghost">Finance</a>
          <a routerLink="/crm" class="z-btn z-btn--ghost">CRM</a>
          <a routerLink="/rh" class="z-btn z-btn--ghost">RH</a>
          <a routerLink="/tarifs" class="z-btn z-btn--ghost">Tarifs</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFound {}
