import { SafeHtml } from '@angular/platform-browser';

export interface MenuItemTypes {
  ids?: number;
  key: string;
  label: string;
  isTitle?: boolean;
  icon?: any;
  url?: any[] | string;
  badge?: boolean;
  isDivider?: boolean;
  parentKey?: string;
  target?: string;
  children?: MenuItemTypes[];
  sanitizedIcon?: SafeHtml;
  id?: string;
  isActive?: boolean;
  description?: string;
  iconBg?: string;
  iconColor?: string;
}
export const HORIZONTAL_MENU_ITEMS: MenuItemTypes[] = [
  {
    key: 'demos',
    label: 'Demos',
    isTitle: true,
    id: 'innerPageDropdownMenu',
    isActive: true,
    children: [
      {
        key: 'landing-app',
        label: 'Classic Default',
        url: '/home-default',
        parentKey: 'demos',
      },
      {
        key: 'landing-software',
        label: 'Software Company',
        url: '/home-software',
        parentKey: 'demos',
      },
      {
        key: 'landing-finance',
        label: 'Finance Consulting',
        url: '/home-finance',
        parentKey: 'demos',
      },
      {
        key: 'landing-agency',
        label: 'AI Agency',
        url: '/home-agency',
        parentKey: 'demos',
      },
      {
        key: 'landing-product',
        label: 'Product Landing',
        url: '/home-product',
        parentKey: 'demos',
      },
      {
        key: 'landing-sass',
        label: 'SaaS',
        url: '/home-saas',
        parentKey: 'demos',
      },
      {
        key: 'landing-saas-ai',
        label: 'SaaS AI Chatbox',
        url: '/home-chatbox',
        parentKey: 'demos',
      },
      {
        key: 'landing-application',
        label: 'Application Showcase',
        url: '/home-application',
        parentKey: 'demos',
      },
      {
        key: 'landing-portfolio',
        label: 'Personal Portfolio',
        url: '/home-portfolio',
        parentKey: 'demos',
      },
      {
        key: 'landing-blog',
        label: 'Blog home',
        url: '/home-blog',
        parentKey: 'demos',
      },
    ],
  },
  {
    key: 'pages',
    isActive: true,
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'pages-about',
        label: 'About',
        parentKey: 'pages',
        children: [
          {
            key: 'about-1',
            label: 'About v.1',
            url: '/about-v1',
            parentKey: 'pages-about',
          },
          {
            key: 'about-2',
            label: 'About v.2',
            url: '/about-v2',
            parentKey: 'pages-about',
          },

          {
            key: 'service-grid',
            label: 'Service Grid',
            url: '/service-grid',
            parentKey: 'pages-about',
          },
          {
            key: 'service-list',
            label: 'Service List',
            url: '/service-list',
            parentKey: 'pages-about',
          },
          {
            key: 'service-single',
            label: 'Service Single',
            url: '/service-single',
            parentKey: 'pages-about',
          },
          {
            key: 'team',
            label: 'Team',
            url: '/team',
            parentKey: 'pages-about',
          },
          {
            key: 'career',
            label: 'Career',
            url: '/career',
            parentKey: 'pages-about',
            badge: true,
          },
          {
            key: 'career-single',
            label: 'Career Single',
            url: '/career-single',
            parentKey: 'pages-about',
          },
        ],
      },
      {
        key: 'pages-contact',
        label: 'Contact Us v1',
        url: '/contact-v1',
        parentKey: 'pages',
      },
      {
        key: 'pages-contact-2',
        label: 'Contact Us v2',
        url: '/contact-v2',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing',
        label: 'Pricing v1',
        url: '/pricing-v1',
        parentKey: 'pages',
      },
      {
        key: 'pages-pricing-2',
        label: 'Pricing v2',
        url: '/pricing-v2',
        parentKey: 'pages',
      },
      {
        key: 'saas',
        label: 'Saas Pages',
        parentKey: 'pages',
        children: [
          {
            key: 'Feature-single',
            label: 'Feature Single',
            url: '/feature-single',
            parentKey: 'saas',
          },
          {
            key: 'integrations',
            label: 'Integrations',
            url: '/integrations',
            parentKey: 'saas',
          },

          {
            key: 'integration-single',
            label: 'Integration Single',
            url: '/integration-single',
            parentKey: 'saas',
          },
        ],
      },
      {
        key: 'portfolio',
        label: 'Portfolio',
        parentKey: 'pages',
        children: [
          {
            key: 'portfolio-grid',
            label: 'Portfolio Grid',
            url: '/portfolio-grid',
            parentKey: 'portfolio',
          },
          {
            key: 'portfolio-list',
            label: 'Portfolio List',
            url: '/portfolio-list',
            parentKey: 'portfolio',
          },

          {
            key: 'portfolio-modern',
            label: 'Portfolio Modern',
            url: '/portfolio-modern',
            parentKey: 'portfolio',
          },

          {
            key: 'portfolio-case-study-v1',
            label: 'Portfolio Case Study v1',
            url: '/portfolio-case-study-v1',
            parentKey: 'portfolio',
          },

          {
            key: 'portfolio-case-study-v2',
            label: 'Portfolio Case Study v2',
            url: '/portfolio-case-study-v2',
            parentKey: 'portfolio',
          },
        ],
      },
      {
        key: 'blog',
        label: 'Blog',
        parentKey: 'pages',
        children: [
          {
            key: 'blog-minimal',
            label: 'Blog Minimal',
            url: '/blog-minimal',
            parentKey: 'blog',
          },
          {
            key: 'blog-single',
            label: 'Blog Single',
            url: '/blog-single',
            parentKey: 'blog',
          },
        ],
      },
      {
        key: 'pages-error',
        label: 'Error 404',
        url: '/error-404',
        parentKey: 'pages',
      },
      {
        key: 'comming-soon',
        label: 'Coming Soon',
        url: '/coming-soon',
        parentKey: 'pages',
      },
      {
        key: 'auth',
        label: 'Authantication',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-login',
            label: 'Sign In',
            url: '/auth/sign-in',
            parentKey: 'auth',
          },
          {
            key: 'auth-signup',
            label: 'Sign Up',
            url: '/auth/sign-up',
            parentKey: 'auth',
          },
          {
            key: 'auth-password',
            label: 'Forgot Password',
            url: '/auth/forgot-password',
            parentKey: 'auth',
          },
        ],
      },
    ],
  },
  {
    key: 'More',
    label: 'More',
    isTitle: true,
    isActive: true,
    children: [
      {
        key: 'product-landing',
        label: 'Product Landing',
        description: 'Landing page for showcasing a product',
        url: '/home-product',
        icon: 'bi bi-file-earmark-text',
        iconBg: 'bg-primary bg-opacity-15',
        iconColor: 'text-primary',
        parentKey: 'docs',
      },

      {
        key: 'ai-agency',
        label: 'AI Agency',
        description: 'Agency template for AI services and solutions',
        url: '/home-agency',
        icon: 'bi bi-bullseye',
        iconBg: 'bg-success bg-opacity-15',
        iconColor: 'text-success',
        parentKey: 'docs',
      },
      {
        key: 'integrations',
        label: 'Integrations',
        description: 'Taking advantage of integrations with other services.',
        url: '/integrations',
        icon: 'bi bi-grid-fill',
        iconBg: 'bg-info bg-opacity-15',
        iconColor: 'text-info',
        parentKey: 'docs',
      },
      {
        key: 'finance Consulting',
        label: 'Finance Consulting',
        description: 'Consulting template for finance and business',
        url: '/home-finance',
        icon: 'bi bi-stickies',
        iconBg: 'bg-pink bg-opacity-15',
        iconColor: 'text-pink',
        parentKey: 'docs',
      },
      {
        key: 'playwright-tips',
        label: 'Playwright tips',
        description: 'Tips and In-depth guide for headless browser automation',
        url: '/contact-v2',
        icon: 'bi bi-mask',
        iconBg: 'bg-warning bg-opacity-15',
        iconColor: 'text-warning',
        parentKey: 'docs',
      },

      {
        key: 'supports',
        label: 'Supports',
        description: 'Need help? Our customers support is there to help you.',
        url: [],
        icon: 'bi bi-chat-dots',
        iconBg: 'bg-purple bg-opacity-15',
        iconColor: 'text-purple',
        parentKey: 'docs',
      },
    ],
  },
  {
    key: 'contact-us',
    label: 'Contact us',
    isTitle: false,
    url: '/contact-us',
  },
];
