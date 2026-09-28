import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rf-not-found',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rf-404">
      <div class="container text-center">
        <span class="rf-eyebrow">Erreur 404</span>
        <h1 class="rf-display mb-4" style="font-size: clamp(2.2rem, 1.4rem + 2.6vw, 3.4rem)">Cette page n’existe pas.</h1>
        <p class="rf-lead mb-4">Le lien est peut-être ancien. Les pages ci-dessous, elles, sont bien là.</p>
        <div class="d-flex flex-wrap justify-content-center gap-2">
          <a routerLink="/" class="btn btn-primary mb-0">Accueil</a>
          <a routerLink="/finance" class="btn btn-rf-ghost mb-0">Finance</a>
          <a routerLink="/crm" class="btn btn-rf-ghost mb-0">CRM</a>
          <a routerLink="/rh" class="btn btn-rf-ghost mb-0">RH</a>
          <a routerLink="/tarifs" class="btn btn-rf-ghost mb-0">Tarifs</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFound {}
