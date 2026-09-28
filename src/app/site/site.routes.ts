import { Routes } from '@angular/router';
import { SiteLayout } from './layout/site-layout';
import { MODULES } from './data/modules';

export const SITE_ROUTES: Routes = [
  {
    path: '',
    component: SiteLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
        data: {
          description:
            'RFIDIA réunit la gestion commerciale et la comptabilité, la prospection terrain et les ressources humaines des PME de Tunisie et d’Algérie sur une seule plateforme.',
        },
      },
      ...(['finance', 'crm', 'rh'] as const).map((key) => ({
        path: key,
        loadComponent: () => import('./pages/module/module-page').then((m) => m.ModulePage),
        data: { module: key, titre: MODULES[key].seo.titre, description: MODULES[key].seo.description },
      })),
      {
        path: 'tarifs',
        loadComponent: () => import('./pages/pricing/pricing-page').then((m) => m.PricingPage),
        data: {
          titre: 'Tarifs',
          description:
            'Finance, RH, Finance + RH ou suite complète : des offres mensuelles ou annuelles, avec une offre de lancement jusqu’au 15 décembre 2026.',
        },
      },
      {
        path: 'demonstration',
        loadComponent: () => import('./pages/demo/demo-page').then((m) => m.DemoPage),
        data: {
          titre: 'Demander une démonstration',
          description: 'Une démonstration de RFIDIA sur vos propres documents, avec les modules qui vous concernent.',
        },
      },
      {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
        data: { titre: 'Page introuvable' },
      },
    ],
  },
];
