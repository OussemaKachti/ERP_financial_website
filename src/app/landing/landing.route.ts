import { Route } from '@angular/router';

import { Portfolio } from './portfolio/portfolio';
import { Default } from './default/default';
import { Software } from './software/software';
import { Finance } from './finance/finance';
import { Agency } from './agency/agency';
import { Product } from './product/product';
import { Saas } from './saas/saas';
import { SaasChatbox } from './saas-chatbox/saas-chatbox';
import { Showcase } from './showcase/showcase';
import { Blog } from './blog/blog';

export const LANDING_ROUTES: Route[] = [
    {
        path: 'home-default',
        component: Default,
        data: { title: 'Claasic Default' },
    },
    {
        path: 'home-agency',
        component: Agency,
        data: { title: 'AI Agency' },
    },
    {
        path: 'home-application',
        component: Showcase,
         data: { title: 'Application showcase' },
    },
    {
        path: 'home-software',
        component: Software,
        data: { title: 'Software Company' },
    },
    {
        path: 'home-finance',
        component: Finance,
        data: { title: 'Finance Consulting' },
    },
    {
        path: 'home-product',
        component: Product,
        data: { title: 'Product Landing' },
    },
    {
        path: 'home-saas',
        component: Saas,
        data: { title: 'Saas' },
    },
    {
        path: 'home-chatbox',
        component: SaasChatbox,
        data: { title: 'Saas AI Chatbox' },
    },
    {
        path: 'home-portfolio',
        component: Portfolio,
        data: { title: 'Portfolio' },
    },
    {
        path: 'home-blog',
        component: Blog,
        data: { title: 'Blog Home' },
    },
];
