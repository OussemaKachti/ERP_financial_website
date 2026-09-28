interface pricingPlans {
  plan: string;
  monthlyPrice?: string;
  annualPrice?: string;
  icons: string;
  cardColor: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: any[];
  extraclass?: string;
  price?: string;
}

interface clientLogos {
  gray_image: string;
  dark_mode_image: string;
  light_mode_image: string;
  alt: string;
}

interface Plan {
  name: string;
  btnText: string;
}

interface Feature {
  name: string;
  values: (string | 'check' | 'x')[];
}

interface PricingTables {
  plans?: Plan[];
  features?: Feature[];
}

interface faqDatas {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

export const pricingPlan: pricingPlans[] = [
  {
    plan: 'Basic plan',
    monthlyPrice: '$25',
    annualPrice: '$20',
    icons: 'bi bi-lightning-charge-fill fa-lg lh-1 heading-color',
    cardColor: 'card-header bg-secondary bg-opacity-50 p-4 pb-0',
    description: 'Basic feature for up to 10 users',
    features: [
      'Up to 05 users monthly',
      'Free 5 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
    ],
    buttonText: 'Get started',
    buttonLink: [],
  },
  {
    plan: 'Standard plan',
    monthlyPrice: '$59',
    annualPrice: '$45',
    icons: 'bi bi-send-fill fa-lg lh-1 heading-color',
    cardColor: 'card-header bg-secondary bg-opacity-50 p-4 pb-0',
    description: 'Basic feature for up to 50 users',
    features: [
      'Up to 20 users monthly',
      'Free 12 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
      'Landing pages Web widgets',
      'Customizable features',
    ],
    buttonText: 'Get started',
    buttonLink: [],
  },
  {
    plan: 'Enterprise plan',
    monthlyPrice: '$99',
    annualPrice: '$75',
    icons: 'bi bi-rocket-takeoff-fill fa-lg lh-1 text-white',
    cardColor: 'card-header bg-secondary-grad rounded-top p-4 pb-0',
    description: 'Basic feature for up to 80 users',
    features: [
      'Up to 50 users monthly',
      'Free 25 host domain',
      'Google docs style editors',
      'Support for 30+ languages',
      'Landing pages Web widgets',
      'Customizable features',
      '24/7 dedicated Support',
    ],
    buttonText: 'Get started',
    buttonLink: [],
    extraclass: 'Recommended',
  },
  {
    plan: 'Business plan',
    price: 'Custom',
    icons: 'bi bi-headset fa-lg lh-1 heading-color',
    description: 'Customize feature according to users',
    cardColor:
      'card-header bg-secondary bg-opacity-50 position-relative overflow-hidden p-4 pb-0',
    features: [
      'Unlimited projects',
      'Custom reporting and analytics',
      'Dedicated account manager',
      'Tailored support and consulting',
      'Customizable features',
    ],
    buttonText: 'Request pricing',
    buttonLink: [],
  },
];

export const clientLogo: clientLogos[] = [
  {
    gray_image: 'assets/images/client/logo-gray/01.svg',
    dark_mode_image: 'assets/images/client/logo-light/01.svg',
    light_mode_image: 'assets/images/client/logo-dark/01.svg',
    alt: 'client logo',
  },
  {
    gray_image: 'assets/images/client/logo-gray/02.svg',
    dark_mode_image: 'assets/images/client/logo-light/02.svg',
    light_mode_image: 'assets/images/client/logo-dark/02.svg',
    alt: 'client logo',
  },
  {
    gray_image: 'assets/images/client/logo-gray/03.svg',
    dark_mode_image: 'assets/images/client/logo-light/03.svg',
    light_mode_image: 'assets/images/client/logo-dark/03.svg',
    alt: 'client logo',
  },
  {
    gray_image: 'assets/images/client/logo-gray/04.svg',
    dark_mode_image: 'assets/images/client/logo-light/04.svg',
    light_mode_image: 'assets/images/client/logo-dark/04.svg',
    alt: 'client logo',
  },
  {
    gray_image: 'assets/images/client/logo-gray/05.svg',
    dark_mode_image: 'assets/images/client/logo-light/05.svg',
    light_mode_image: 'assets/images/client/logo-dark/05.svg',
    alt: 'client logo',
  },
  {
    gray_image: 'assets/images/client/logo-gray/06.svg',
    dark_mode_image: 'assets/images/client/logo-light/06.svg',
    light_mode_image: 'assets/images/client/logo-dark/06.svg',
    alt: 'client logo',
  },
];

export const pricingTable: PricingTables[] = [
  {
    plans: [
      { name: 'Basic plan', btnText: 'Get started' },
      { name: 'Standard plan', btnText: 'Get started' },
      { name: 'Enterprise plan', btnText: 'Get started' },
    ],
  },
  {
    features: [
      { name: 'Storage space', values: ['40GB', '60GB', 'Unlimited'] },
      { name: 'Cloud connected', values: ['Yes', 'Yes', 'Yes'] },
      { name: 'Coding tools', values: ['check', 'check', 'check'] },
      { name: 'Advance debugging', values: ['check', 'check', 'check'] },
      { name: 'Mobile apps', values: ['x', 'check', 'check'] },
      { name: 'Web tools', values: ['x', 'check', 'check'] },
      { name: 'Version control', values: ['x', 'check', 'check'] },
      { name: 'Security', values: ['x', 'x', 'check'] },
      { name: 'Team access', values: ['x', 'x', 'check'] },
    ],
  },
];

export const faqData:faqDatas[] = [
  {
    id: 1,
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    open: true,
  },
  {
    id: 2,
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites.',
    open: false,
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.',
    open: false,
  },
  {
    id: 4,
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.',
    open: false,
  },
];
