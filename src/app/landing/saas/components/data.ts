export interface Plan {
  id: string;
  name: string;
  icon: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
}

interface step {
  image: string;
  title: string;
  description: string;
  image2?: string;
}

interface footerPlatform {
  title: string;
  icon: string;
  alt: string;
}

interface FootersData {
  type: 'logo' | 'links' | 'newsletter';

  logoLight?: string;
  logoDark?: string;
  description?: string;
  contacts?: {
    icon: string;
    text: string;
    link: string;
  }[];

  title?: string;
  items?: {
    label: string;
    href: string | string[];
    badge?: {
      text: string;
      class: string;
    };
    external?: boolean;
  }[];
  note?: string;
  socials?: {
    icon: string;
    class: string;
    href: string | string[];
  }[];
}

export const steps: step[] = [
  {
    image: 'assets/images/elements/saas-decoration/step-1.png',
    title: 'Sign up and customize',
    description:
      'Create your account and customize your dashboard to fit your business needs.',
  },
  {
    image: 'assets/images/elements/saas-decoration/step-2-1.png',
    image2: 'assets/images/elements/saas-decoration/step-2-2.png',
    title: 'Integrate and collect data',
    description:
      'Start collecting valuable data from all your user business processes instantly.',
  },
  {
    image: 'assets/images/elements/saas-decoration/step-3.png',
    title: 'Analyze and optimize',
    description:
      'Use the analytics to make informed decisions and drive growth.',
  },
];

export const plans: Plan[] = [
  {
    id: 'starter-plan',
    name: 'Starter plan',
    icon: 'assets/images/elements/rocket.png',
    monthlyPrice: 25,
    annualPrice: 20,
    features: [
      'Customizable features',
      '5 user accounts',
      'Customizable features',
      '10 GB storage',
      'Email support',
    ],
  },
  {
    id: 'professional-plan',
    name: 'Professional plan',
    icon: 'assets/images/elements/thunder.png',
    monthlyPrice: 49,
    annualPrice: 39,
    features: [
      'Access to basic features',
      '15 user accounts',
      'Customizable features',
      '50 GB storage',
      'Email support',
      'Dedicated account manager',
    ],
  },
  {
    id: 'enterprise-plan',
    name: 'Enterprise plan',
    icon: 'assets/images/elements/fire.png',
    monthlyPrice: 89,
    annualPrice: 69,
    features: [
      'Access to basic features',
      '30 user accounts',
      'Customizable features',
      '100 GB storage',
      'Email support',
      'Dedicated account manager',
    ],
  },
];

export const blogData = {
  title: 'Insights from our blog',
  followText: 'Follow us on Instagram to see life at',
  instagramLink: [],
  instagramHandle: '@folio',
  blogs: [
    {
      category: 'Lifestyle',
      image: 'assets/images/blog/4by3/01.jpg',
      title: 'Harnessing the power of real-time analytics',
      author: 'By Carolyn Ortiz',
      link: '/blog-single',
    },
    {
      category: 'Research',
      image: 'assets/images/blog/4by3/02.jpg',
      title: 'The ultimate guide to customizable reports',
      author: 'By Louis Ferguson',
      link: '/blog-single',
    },
    {
      category: 'Research',
      image: 'assets/images/blog/4by3/03.jpg',
      title: 'Sleek and Responsive - Designing with Bootstrap and Folio',
      author: 'By Carolyn Ortiz',
      link: '/blog-single',
    },
    {
      category: 'Design',
      image: 'assets/images/blog/4by3/04.jpg',
      title: 'Interactive Web Design with Bootstrap and Webestica',
      author: 'By Louis Ferguson',
      link: '/blog-single',
    },
  ],
  decorationImage: 'assets/images/elements/relex-slay.png',
};

export const footerPlatforms: footerPlatform[] = [
  {
    title: 'IOS',
    icon: 'assets/images/elements/apple.svg',
    alt: 'apple icon',
  },
  {
    title: 'Microsoft',
    icon: 'assets/images/elements/microsoft.svg',
    alt: 'microsoft icon',
  },
  {
    title: 'Android',
    icon: 'assets/images/elements/android.svg',
    alt: 'android icon',
  },
  {
    title: 'Linux',
    icon: 'assets/images/elements/linux.svg',
    alt: 'linux icon',
  },
];

export const footerData: FootersData[] = [
  {
    type: 'logo',
    logoLight: 'assets/images/logo.svg',
    logoDark: 'assets/images/logo-light.svg',
    description:
      "A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.",
    contacts: [
      {
        icon: 'bi bi-headset',
        text: '(251) 854-6308',
        link: 'tel:+12518546308',
      },
      {
        icon: 'bi bi-envelope',
        text: 'example@gmail.com',
        link: 'mailto:example@gmail.com',
      },
    ],
  },
  {
    type: 'links',
    title: 'Company',
    items: [
      { label: 'About us', href: '/about-v1' },
      { label: 'Contact us', href: '/contact-us' },
      {
        label: 'Career',
        href: '/career',
        badge: { text: '2 jobs', class: 'bg-primary' },
      },
      { label: 'Career detail', href: '/career-single' },
      { label: 'Become a partner', href: '/contact-v2' },
      { label: 'Services', href: '/service-single' },
    ],
  },
  {
    type: 'links',
    title: 'Resources',
    items: [
      { label: 'Case studies', href: '/portfolio-case-study-v1' },
      {
        label: 'Pricing',
        href: '/pricing-v1',
        badge: { text: 'New', class: 'bg-success' },
      },
      { label: 'Blogs', href: '/blog-minimal' },
      { label: 'Blog detail', href: '//blog-single' },
      { label: 'Success stories', href: '/home-product', external: true },
    ],
  },
  {
    type: 'newsletter',
    title: 'Stay connected with us',
    note: '✌️ No Spam — We Promise!',
    socials: [
      { icon: 'bi bi-facebook', class: 'bg-facebook', href: [] },
      { icon: 'bi bi-instagram', class: 'bg-instagram', href: [] },
      { icon: 'bi bi-twitter-x', class: 'bg-twitter-x', href: [] },
      { icon: 'bi bi-linkedin', class: 'bg-linkedin', href: [] },
    ],
  },
];

export const counter = [
  {
    value: 99,
    suffix: '%',
    text: 'Track and analyze business reports',
    color: 'text-primary',
    showStars: false,
  },
  {
    value: 4.8,
    text: 'Best rated company',
    showStars: true,
  },
  {
    value: 95,
    suffix: '%',
    text: 'Genuine reputed happy customers',
    color: 'text-purple',
    showStars: false,
  },
];
