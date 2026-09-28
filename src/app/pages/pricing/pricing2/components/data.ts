interface pricingPlan {
  title: string;
  price: number;
  description: string;
  features: {
    icon: string;
    text: string;
  }[];
  button: {
    text: string;
    icon: string;
  };
  link: any[];
  image: string;
}

 interface FeatureItem {
  icon: string;
  colorClass: string;
  text: string;
}

 interface FaqItem {
  id: string;
  question: string;
  answer: string;
  open?: boolean; 
}

export const faqList: FaqItem[] = [
  {
    id: '1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for custom plans. Our expert team will turn your concept into a working prototype within 24 hours, ensuring rapid progress and immediate feedback.',
    open: true,
  },
  {
    id: '2',
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time from your account settings. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
  {
    id: '3',
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.',
  },
  {
    id: '4',
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.',
  },
  {
    id: '5',
    question: 'Are there any setup fees?',
    answer:
      'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
];


export const featureList: FeatureItem[] = [
  { icon: 'bi bi-wallet2', colorClass: 'text-primary', text: 'No hidden fees' },
  { icon: 'bi bi-headset', colorClass: 'text-pink', text: '24/7 Customer support' },
  { icon: 'bi bi-rocket-takeoff', colorClass: 'text-warning', text: 'Easy upgrade & downgrade' },
  { icon: 'bi bi-clock-history', colorClass: 'text-success', text: 'You can cancel anytime' },
];

export const pricingPlans: pricingPlan[] = [
  {
    title: 'Basic plan',
    price: 59,
    description:
      'Ideal for small teams, the Basic plan manages up to 10 projects.',
    features: [
      {
        icon: 'bi bi-check-lg text-success me-1',
        text: 'Customizable features',
      },
      { icon: 'bi bi-check-lg text-success me-1', text: '5 user accounts' },
      {
        icon: 'bi bi-check-lg text-success me-1',
        text: 'Customizable features',
      },
      { icon: 'bi bi-check-lg text-success me-1', text: '10 GB storage' },
      { icon: 'bi bi-check-lg text-success me-1', text: 'Email support' },
    ],
    button: { text: 'Purchase', icon: 'bi bi-arrow-right' },
    link: [],
    image: 'assets/images/elements/rocket.png',
  },
  {
    title: 'Professional plan',
    price: 99,
    description:
      'Get priority email support and access to premium templates for a more comprehensive solution.',
    features: [
      {
        icon: 'bi bi-check-lg text-success me-1',
        text: 'Access to basic features',
      },
      { icon: 'bi bi-check-lg text-success me-1', text: '15 user accounts' },
      {
        icon: 'bi bi-check-lg text-success me-1',
        text: 'Customizable features',
      },
      { icon: 'bi bi-check-lg text-success me-1', text: '50 GB storage' },
      {
        icon: 'bi bi-check-lg text-success me-1',
        text: 'Dedicated account manager',
      },
    ],
    button: { text: 'Purchase', icon: 'bi bi-arrow-right' },
    link: [],
    image: 'assets/images/elements/fire.png',
  },
];
