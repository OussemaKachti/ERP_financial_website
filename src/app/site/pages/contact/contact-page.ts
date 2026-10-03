import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site.config';

/** Coordonnées commerciales et accès aux applications. */
@Component({
  selector: 'rf-contact-page',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="z-page-hero">
      <div class="container">
        <ol class="z-crumbs">
          <li><a routerLink="/">Accueil</a></li>
          <li aria-current="page">Contact</li>
        </ol>
        <h1 class="z-h1">Parlons de votre entreprise.</h1>
        <p class="z-lead">
          Un appel suffit pour savoir si RFIDIA vous convient. Pour voir l’application sur vos propres documents,
          demandez plutôt une démonstration.
        </p>
      </div>
    </section>

    <section class="z-section-sm pt-0">
      <div class="container">
        <div class="z-mosaic z-contact">
          <div class="z-tile z-contact-main" style="--t: var(--z-night)">
            <h2 class="z-h3">Appelez-nous</h2>
            @for (t of site.contact.telephones; track t) {
              <a class="z-contact-big z-num" [href]="'tel:' + t.replaceAll(' ', '')">{{ t }}</a>
            }
            <p class="mt-3 mb-0">{{ site.contact.horaires }}</p>
          </div>

          <div class="z-tile z-contact-cell">
            <i class="bi bi-envelope"></i>
            <h2 class="z-h3">Écrivez-nous</h2>
            <a [href]="'mailto:' + site.contact.email">{{ site.contact.email }}</a>
            <span class="z-muted z-small mt-2">Équipe commerciale</span>
            <a [href]="'mailto:' + site.contact.emailCommercial">{{ site.contact.emailCommercial }}</a>
          </div>

          <a class="z-tile z-contact-cell" [href]="site.contact.carte" target="_blank" rel="noopener">
            <i class="bi bi-geo-alt"></i>
            <h2 class="z-h3">Passez nous voir</h2>
            <span>
              @for (l of site.contact.adresse; track l) {
                {{ l }}<br>
              }
            </span>
            <span class="z-link mt-3">Ouvrir le plan <i class="bi bi-arrow-up-right"></i></span>
          </a>

          <div class="z-tile z-tile--glazed z-contact-demo" style="--t: var(--z-finance)">
            <h2 class="z-h3">Voir l’application sur vos cas</h2>
            <p>Une démonstration avec vos documents, vos circuits de validation et les modules qui vous concernent.</p>
            <a routerLink="/demonstration" class="z-btn z-btn--light mt-auto">Demander une démonstration</a>
          </div>
        </div>
      </div>
    </section>

    <section class="z-section-sm z-band">
      <div class="container">
        <h2 class="z-h3 mb-4">Déjà client ? Accès directs</h2>
        <ul class="z-direct">
          <li><span class="z-chip" style="--c: var(--z-finance)"></span><span>Finance</span><a [href]="site.apps.finance">{{ hote(site.apps.finance) }}</a></li>
          <li><span class="z-chip" style="--c: var(--z-crm)"></span><span>CRM</span><a [href]="site.apps.crm">{{ hote(site.apps.crm) }}</a></li>
          <li><span class="z-chip" style="--c: var(--z-rh)"></span><span>RH</span><a [href]="site.apps.rh">{{ hote(site.apps.rh) }}</a></li>
        </ul>
      </div>
    </section>
  `,
})
export class ContactPage {
  protected readonly site = SITE;

  protected hote(url: string): string {
    return url.replace(/^https?:\/\//, '');
  }
}
