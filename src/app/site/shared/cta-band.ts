import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site.config';

/** Appel à l'action de fin de page. */
@Component({
  selector: 'rf-cta-band',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rf-section-sm">
      <div class="container">
        <div class="rf-cta" data-aos="fade-up">
          <div class="row align-items-end g-4">
            <div class="col-lg-8">
              <h2 class="rf-h2 mb-3">{{ titre() }}</h2>
              <p class="rf-lead mb-0" style="color: #b8bdd6">{{ texte() }}</p>
            </div>
            <div class="col-lg-4 d-flex flex-column flex-sm-row flex-lg-column gap-2 align-items-lg-end">
              <a routerLink="/demonstration" class="btn btn-rf-light btn-lg mb-0">Demander une démonstration</a>
              <a [href]="site.inscription" class="btn btn-rf-outline-light btn-lg mb-0">Essayer gratuitement</a>
            </div>
          </div>
          <div class="rf-cta-apps">
            <div><span>Finance</span><a [href]="site.apps.finance">finances.tagstream.com.tn</a></div>
            <div><span>CRM</span><a [href]="site.apps.crm">crm.tagstream.com.tn</a></div>
            <div><span>RH</span><a [href]="site.apps.rh">rh.tagstream.com.tn</a></div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBand {
  protected readonly site = SITE;
  readonly titre = input('Voyons ensemble comment RFIDIA s’adapte à votre entreprise.');
  readonly texte = input(
    'Une démonstration sur vos propres cas — vos documents, vos circuits de validation, votre équipe — vaut mieux qu’une longue description.'
  );
}
