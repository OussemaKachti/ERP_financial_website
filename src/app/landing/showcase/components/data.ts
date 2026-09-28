
interface feature {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

interface stepData {
  phase: string;
  title: string;
  description: string;
  image: string;
}

interface testimonial {
  image: string;
  rating: number;
  text: string;
  name: string;
  role: string;
}

interface blog {
  image: string;
  title: string;
  description: string;
  link: string;
}

export const heroImages: string[] = [
  'assets/images/avatar/02.jpg',
  'assets/images/avatar/05.jpg',
  'assets/images/avatar/10.jpg',
  'assets/images/avatar/09.jpg',
  'assets/images/avatar/06.jpg',
];

export const features: feature[] = [
  {
    title: 'Instant money transfers',
    description:
      'Transfer money to friends, family, or businesses quickly and securely.',
    icon: 'bi bi-cash-stack fa-lg',
    iconColor: 'text-success',
  },
  {
    title: 'Easy bill payments',
    description:
      'Pay utility bills, credit card bills, and more with just a few taps.',
    icon: 'bi bi-receipt fa-lg',
    iconColor: 'text-purple',
  },
  {
    title: 'Real-time notifications',
    description:
      'Stay updated with real-time alerts for transactions and account activities.',
    icon: 'bi bi-bell fa-lg',
    iconColor: 'text-warning',
  },
  {
    title: 'Account management',
    description:
      'Monitor your account balance, transaction history, and manage your finances efficiently.',
    icon: 'bi bi-person-vcard fa-lg',
    iconColor: 'text-info',
  },
  {
    title: 'Budgeting tools',
    description:
      'Use built-in tools to set budgets, track spending, and save more effectively.',
    icon: 'bi bi-gear fa-lg',
    iconColor: 'text-primary',
  },
  {
    title: '24/7 customer support',
    description:
      'Get help anytime with our dedicated customer support team, available around the clock.',
    icon: 'bi bi-headset fa-lg',
    iconColor: 'text-pink',
  },
];

export const ratings = {
  overallRating: '4.5/5.0',
  userCount: '365',
  platformReviews: '35K+',
  totalMembers: '86M',
};

export const stepsData: stepData[] = [
  {
    phase: 'Phase 1',
    title: 'Sign up and secure your account',
    description:
      'Create an account using your email or phone number. Complete the straightforward verification process to ensure your account is protected. Follow the simple verification process to secure your account. This ensures a personalized and seamless banking experience.',
    image: 'assets/images/mobile-app/step-1.jpg',
  },
  {
    phase: 'Phase 2',
    title: 'Enter your personal and financial details',
    description:
      'Provide the necessary information to set up your profile. This ensures a personalized and seamless banking experience tailored to your needs. This ensures a personalized and seamless banking experience.',
    image: 'assets/images/mobile-app/step-2.jpg',
  },
  {
    phase: 'Phase 3',
    title: 'Explore the full range of banking features',
    description:
      'Discover all the app’s functionalities, from instant money transfers to convenient bill payments, and start managing your finances with ease and efficiency. This ensures a personalized and seamless banking experience. Follow the simple verification process to secure your account.',
    image: 'assets/images/mobile-app/step-3.jpg',
  },
];

export const testimonials: testimonial[] = [
  {
    image: 'assets/images/team/01.jpg',
    rating: 4.5,
    text: "I've been using this app for over a year now, and it has made managing my finances so much easier. The user interface is incredibly intuitive.",
    name: 'Emma Watson',
    role: 'UI/UX Designer',
  },
  {
    image: 'assets/images/team/04.jpg',
    rating: 4.5,
    text: 'The app is fast, reliable, and customer support is always there when I need help. Highly recommended!',
    name: 'Louis Ferguson',
    role: 'Web Developer',
  },
  {
    image: 'assets/images/team/03.jpg',
    rating: 5,
    text: 'The budgeting tools in this app have helped me save more and spend wisely.',
    name: 'Jacqueline Miller',
    role: 'Product designer',
  },
];

export const blogs: blog[] = [
  {
    image: 'assets/images/blog/4by3/01.jpg',
    title: 'Tips for secure online banking',
    description:
      'Learn essential tips to keep your online banking experience safe and secure.',
    link: '/blog-single',
  },
  {
    image: 'assets/images/blog/4by3/02.jpg',
    title: 'The future of digital banking',
    description:
      'Explore the latest trends in digital banking and how they are shaping the future.',
    link: '/blog-single',
  },
  {
    image: 'assets/images/blog/4by3/03.jpg',
    title: 'How to maximize your savings with our app',
    description:
      'Discover practical strategies to save more money using the features of our app.',
    link: '/blog-single',
  },
  {
    image: 'assets/images/blog/4by3/04.jpg',
    title: 'Understanding mobile payment solutions',
    description:
      'Get a comprehensive overview of mobile payment solutions and how they work.',
    link: '/blog-single',
  },
];

export const experienceData: string[] = [
  'Convenience at your fingertips',
  'Enhanced security',
  'Comprehensive financial tools',
];
