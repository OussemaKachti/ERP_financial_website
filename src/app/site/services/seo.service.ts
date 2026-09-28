import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SITE } from '../site.config';

/** Titre et description de chaque page, lus dans les `data` de la route. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  init(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let r = this.route;
      while (r.firstChild) r = r.firstChild;
      const data = r.snapshot.data;
      this.appliquer(data['titre'], data['description']);
    });
  }

  appliquer(titre?: string, description?: string): void {
    const complet = titre ? `${titre} · ${SITE.nom}` : `${SITE.nom} — Facturation, CRM terrain et paie pour les PME`;
    this.title.setTitle(complet);
    this.meta.updateTag({ property: 'og:title', content: complet });
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
  }
}
