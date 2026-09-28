import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SITE } from '../site.config';
import { OFFRES, Offre, promotionActive } from '../data/pricing';

interface ProduitApi {
  prix?: { mensuel: number; annuel: number; promotion: boolean; catalogue: { mensuel: number; annuel: number } } | null;
}

interface CatalogueApi {
  offres?: string[];
  produits?: Record<string, ProduitApi>;
}

/**
 * Offres affichées. Par défaut, la grille locale ; si l'URL publique de
 * l'API est configurée, les prix du serveur la remplacent dès qu'ils
 * arrivent (et la grille locale reste affichée en cas d'échec).
 */
@Injectable({ providedIn: 'root' })
export class PricingService {
  private http = inject(HttpClient);
  private charge = false;

  readonly offres = signal<Offre[]>(OFFRES);
  readonly promotion = signal<boolean>(promotionActive());

  charger(): void {
    if (this.charge || !SITE.offresPubliquesUrl) return;
    this.charge = true;

    this.http.get<CatalogueApi>(SITE.offresPubliquesUrl).subscribe({
      next: (catalogue) => {
        const produits = catalogue.produits ?? {};
        const offres = OFFRES.filter((o) => !catalogue.offres || catalogue.offres.includes(o.cle)).map((o) => {
          const prix = produits[o.cle]?.prix;
          if (!prix) return o;
          return {
            ...o,
            tarif: prix.catalogue,
            promo: prix.promotion ? { mensuel: prix.mensuel, annuel: prix.annuel } : prix.catalogue,
          };
        });
        const promo = Object.values(produits).some((p) => p.prix?.promotion);
        if (offres.length) this.offres.set(offres);
        this.promotion.set(promo);
      },
      error: () => {
        // grille locale conservée
      },
    });
  }
}
