import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../site.config';
import { FAQ_THEMES } from '../../data/faq';
import { FaqList } from '../../shared/faq-list';

/** Toutes les questions fréquentes, par thème. */
@Component({
  selector: 'rf-faq-page',
  standalone: true,
  imports: [RouterLink, FaqList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="z-page-hero">
      <div class="container">
        <ol class="z-crumbs">
          <li><a routerLink="/">Accueil</a></li>
          <li aria-current="page">Questions</li>
        </ol>
        <h1 class="z-h1">Ce qu’on nous demande avant de signer.</h1>
        <p class="z-lead">Les réponses courtes aux questions des dirigeants, des comptables et des équipes RH.</p>
      </div>
    </section>

    <section class="z-section-sm pt-0">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-3">
            <nav class="z-faq-nav" aria-label="Thèmes">
              @for (t of themes; track t.id) {
                <a [href]="'#' + t.id" (click)="aller(t.id, $event)">{{ t.titre }}</a>
              }
            </nav>
          </div>
          <div class="col-lg-9">
            @for (t of themes; track t.id; let premier = $first) {
              <div class="z-faq-theme" [id]="t.id">
                <h2 class="z-h3">{{ t.titre }}</h2>
                <rf-faq-list [questions]="t.questions" [ouvrirPremiere]="premier" />
              </div>
            }

            <div class="z-tile z-faq-more">
              <div>
                <h2 class="z-h3 mb-1">Votre question n’y est pas ?</h2>
                <p class="mb-0 z-muted">
                  Appelez le
                  <a [href]="'tel:' + site.contact.telephones[0].replaceAll(' ', '')" class="z-num">{{ site.contact.telephones[0] }}</a>
                  ou posez-la pendant la démonstration.
                </p>
              </div>
              <a routerLink="/demonstration" class="z-btn">Demander une démonstration</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class FaqPage {
  protected readonly site = SITE;
  protected readonly themes = FAQ_THEMES;

  aller(id: string, evt: Event): void {
    evt.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
