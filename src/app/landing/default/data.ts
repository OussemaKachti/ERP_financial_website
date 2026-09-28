interface ClientLogo {
  gray: string;
  light: string;
  dark: string;
}

interface Service {
  icon: string;
  iconBgColor: string;
  title: string;
  link: string;
}

interface TestimonialType {
  image: string;
  text: string;
  rating: number;
  name: string;
  position: string;
}

interface platformRating {
  icon: string;
  rating: number;
  platform: string;
}

interface faqData {
  id: string;
  title: string;
  description: string;
}

interface counterData {
  count: number;
  suffix: string;
  color: string;
  text: string;
  divider: boolean;
  prefix?: string;
}

interface FooterSection {
  title: string;
  links: {
    label: string;
    iconPosition?: 'left' | 'right';
    link?: string | string[];
    icon?: string;
    badge?: {
      text: string;
      class: string;
    };
  }[];
}

interface footerSocialLink {
  icon: string;
  link: any[];
}

interface Blog {
  type: string;
  category: string;
  categoryClass: string;
  image?: string;
  title: string;
  link: string;
  cardClass?: string;
  titleClass?: string;
  linkClass?: string;
}
export const clientLogos: ClientLogo[] = [
  {
    gray: 'assets/images/client/logo-gray/01.svg',
    light: 'assets/images/client/logo-light/01.svg',
    dark: 'assets/images/client/logo-dark/01.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/02.svg',
    light: 'assets/images/client/logo-light/02.svg',
    dark: 'assets/images/client/logo-dark/02.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/03.svg',
    light: 'assets/images/client/logo-light/03.svg',
    dark: 'assets/images/client/logo-dark/03.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/04.svg',
    light: 'assets/images/client/logo-light/04.svg',
    dark: 'assets/images/client/logo-dark/04.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/05.svg',
    light: 'assets/images/client/logo-light/05.svg',
    dark: 'assets/images/client/logo-dark/05.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/06.svg',
    light: 'assets/images/client/logo-light/06.svg',
    dark: 'assets/images/client/logo-dark/06.svg',
  },
];

export const services: Service[] = [
  {
    icon: 'assets/images/icons/icon1.svg',
    iconBgColor: 'bg-pink',
    title: 'Web design & Development',
    link: '/service-single',
  },
  {
    icon: 'assets/images/icons/icon2.svg',
    iconBgColor: 'bg-warning',
    title: 'Digital marketing solutions',
    link: '/service-single',
  },
  {
    icon: 'assets/images/icons/icon3.svg',
    iconBgColor: 'bg-primary',
    title: 'Brand strategy & Identity',
    link: '/service-single',
  },
];

export const testimonials: TestimonialType[] = [
  {
    image: 'assets/images/avatar/09.jpg',
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.",
    rating: 4.5,
    name: 'Jacqueline Miller',
    position: 'Product designer',
  },
  {
    image: 'assets/images/avatar/10.jpg',
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    rating: 5,
    name: 'Louis Ferguson',
    position: 'Web Developer',
  },
  {
    image: 'assets/images/avatar/01.jpg',
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    rating: 4.5,
    name: 'Emma Watson',
    position: 'UI/UX designer',
  },
];
export const platformRatings: platformRating[] = [
  {
    icon: 'assets/images/elements/apple.svg',
    rating: 4.8,
    platform: 'App Store',
  },
  {
    icon: 'assets/images/elements/gicon.svg',
    rating: 4.6,
    platform: 'Google',
  },
];

export const faqsData: faqData[] = [
  {
    id: '01',
    title: 'Consultation & Strategy',
    description:
      'We begin by understanding your goals, challenges, and vision. Through in-depth consultation, we craft a tailored strategy that aligns with your objectives.',
  },
  {
    id: '02',
    title: 'Implementation & Development',
    description:
      'We provide a range of tools, guides, and best practices to help you create designs, websites, and content that are inclusive and accessible to all individuals, regardless of their visual abilities.',
  },
  {
    id: '03',
    title: 'Refinement & Delivery',
    description:
      'This crucial process ensures that content is easily readable and perceivable by individuals with varying degrees of visual impairment. By adhering to accessibility standards, you create a more inclusive and user-friendly experience for all users.',
  },
];

export const countersData: counterData[] = [
  {
    count: 22,
    suffix: '+',
    color: 'text-primary',
    text: 'Years of experience',
    divider: true,
  },
  {
    count: 200,
    suffix: '+',
    color: 'text-pink',
    text: 'In-house projects completed',
    divider: true,
  },
  {
    count: 32,
    suffix: '+',
    color: 'text-info',
    text: 'Awards and counting',
    divider: true,
  },
  {
    prefix: '>',
    count: 10,
    suffix: 'K',
    color: 'text-warning',
    text: 'Satisfied users',
    divider: false,
  },
];

export const footerData: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', link: '/about-v1' },
      { label: 'Contact us', link: '/contact-us' },
      {
        label: 'Career',
        link: '/career',
        badge: { text: 'We are hiring!', class: 'text-bg-success' },
      },
      { label: 'Career detail', link: '/career-single' },
      { label: 'Become a partner', link: '/contact-v2' },
      { label: 'Services', link: '/service-single' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case studies', link: '/portfolio-case-study-v1' },
      { label: 'Pricing', link: '/pricing-v1' },
      { label: 'Blogs', link: '/blog-minimal' },
      { label: 'Blog detail', link: '/blog-single' },
      {
        label: 'Success stories',
        link: '/home-product',
        icon: 'bi bi-box-arrow-up-right small ms-2',
        iconPosition: 'right',
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Case Studies',
        link: '/portfolio-case-study-v1',
        icon: 'bi bi-file-earmark-text me-2',
        iconPosition: 'left',
      },
      {
        label: 'Changelog',
        link: '/home-agency',
        icon: 'bi bi-bullseye me-2',
        iconPosition: 'left',
      },
      {
        label: 'Supports',
        link: '/contact-v2',
        icon: 'bi bi-chat-left me-2',
        iconPosition: 'left',
      },
      {
        label: 'Newsletter',
        link: '/blog-minimal',
        icon: 'bi bi-send me-2',
        iconPosition: 'left',
      },
      {
        label: 'Help center',
        link: '/service-grid',
        icon: 'bi bi-life-preserver me-2',
        iconPosition: 'left',
      },
    ],
  },
];

export const footerSocialLinks: footerSocialLink[] = [
  { icon: 'bi bi-facebook', link: [] },
  { icon: 'bi bi-instagram', link: [] },
  { icon: 'bi bi-twitter-x', link: [] },
  { icon: 'bi bi-linkedin', link: [] },
];

export const features: string[] = [
  'Flexible solutions',
  'System integration',
  'Complimentary updates',
];
export const blogs: Blog[] = [
  {
    type: 'image-card',
    category: 'Lifestyle',
    categoryClass: 'badge text-bg-white position-absolute top-0 start-0 m-4',
    image: 'assets/images/blog/01.jpg',
    title: 'Techniques to captivate your audience',
    link: '/blog-single',
    cardClass:
      'card card-hover-shadow card-hover-transition border border-opacity-25 rounded-4 overflow-hidden h-100 p-0',
  },
  {
    type: 'text-card',
    category: 'Research',
    categoryClass: 'badge text-bg-dark mb-3',
    title: 'Building a strong identity for your business',
    link: '/blog-single',
    cardClass:
      'card card-hover-shadow card-hover-transition bg-primary-grad rounded-4 overflow-hidden h-100 p-4',
    titleClass: 'card-title text-white mb-5',
    linkClass: 'link-white icon-link icon-link-hover stretched-link',
  },
  {
    type: 'image-card',
    category: 'Lifestyle',
    categoryClass: 'badge text-bg-white position-absolute top-0 start-0 m-4',
    image: 'assets/images/blog/02.jpg',
    title: "Tips for improving your website's visibility",
    link: '/blog-single',
    cardClass:
      'card card-hover-shadow card-hover-transition border border-opacity-25 rounded-4 overflow-hidden h-100 p-0',
  },
];
