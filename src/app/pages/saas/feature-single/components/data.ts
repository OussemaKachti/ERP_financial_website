interface Testimonial {
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: string;
  rating: number;
  content: string;
}

 interface CounterItem {
  count: number;
  suffix?: string;
  prefix?: string;
  text: string;
  color?: string;
}


interface FaqItem {
  id: number;
  question: string;
  answer: string;
  open?: boolean;
}

export interface FeatureItem {
  id: number;
  class : string
  title: string;
  description: string;
  image: string;
  imageBg: string; 
  reverse?: boolean;
}

export const featureList: FeatureItem[] = [
  {
    id: 1,
    class:"row g-4 align-items-center mb-6",
    title: 'Comprehensive data analysis',
    description:
      'Dive deep into your business data with our advanced analytics tools. Identify trends, uncover hidden opportunities, and make informed decisions based on comprehensive data analysis.',
    image: 'assets/images/elements/saas-decoration/tab-3.png',
    imageBg: 'bg-secondary-grad',
  },
  {
    id: 2,
     class:"row g-4 align-items-center mb-6",
    title: 'Real-time data access',
    description:
      'Stay ahead of the curve with real-time reporting. Our analytics feature provides you with immediate access to the latest data, enabling you to monitor performance and make quick adjustments.',
    image: 'assets/images/elements/saas-decoration/tab-2.png',
    imageBg: 'bg-secondary',
    reverse: true, 
  },
  {
    id: 3,
    
    class:"row g-4 align-items-center",
    title: 'Customizable and interactive dashboards',
    description:
      'Tailor your analytics experience with fully customizable dashboards. Choose from a variety of widgets, charts, and graphs to create a personalized view of your key metrics.',
    image: 'assets/images/elements/saas-decoration/step-3.png',
    imageBg: 'bg-secondary-grad',
  },
];

export const faqList: FaqItem[] = [
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
  },
  {
    id: 3,
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 14-day free trial for our Basic and Standard plans. No credit card required.',
  },
  {
    id: 4,
    question: 'How does customer support work?',
    answer:
      'Our Basic plan includes email support, while the Standard and Custom plans offer priority email and dedicated account manager support, respectively.',
  },
  {
    id: 5,
    question: 'Are there any setup fees?',
    answer:
      'No, there are no setup fees for any of our plans. You only pay the monthly subscription fee. We provide a range of tools, guides, and best practices to help you create designs, websites.',
  },
];


export const countersData: CounterItem[] = [
  {
    count: 105,
    suffix: '+',
    text: 'New features added',
    color: 'text-primary',
  },
  {
    count: 10,
    prefix: '>',
    suffix: 'K',
    text: 'Download apk',
    color: 'text-primary',
  },
  {
    count: 15,
    suffix: 'D',
    text: 'Free trial',
    color: 'text-primary',
  },
  {
    count: 98,
    suffix: '%',
    text: 'Client satisfaction',
    color: 'text-primary',
  },
];


export const features:string[] =[
    "In-Depth data analysis","Real-Time reporting","Customizable dashboards"
]


export const testimonial: Testimonial[] = [
  {
    author: {
      name: 'Jacqueline Miller',
      role: 'Product designer',
      avatar: 'assets/images/avatar/01.jpg',
    },
    date: 'June 28, 2024',
    category: 'Design',
    rating: 4.5,
    content:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh.",
  },
  {
    author: {
      name: 'Louis Ferguson',
      role: 'Web Developer',
      avatar: 'assets/images/avatar/02.jpg',
    },
    date: 'July 15, 2024',
    category: 'Research',
    rating: 4.5,
    content:
      'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
  },
  {
    author: {
      name: 'Samuel Bishop',
      role: 'UI/UX designer',
      avatar: 'assets/images/avatar/06.jpg',
    },
    date: 'July 15, 2024',
    category: 'Research',
    rating: 4.5,
    content:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
];
