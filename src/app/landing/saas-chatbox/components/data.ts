interface clientLogo {
  grayLogo: string;
  lightLogo: string;
  darkLogo: string;
}

interface testimonial {
  image: string;
  text: string;
  rating: number;
  name: string;
  position: string;
}

interface faq {
  id: number;
  icon: string;
  title: string;
  content: string;
  open: boolean;
}

interface integrationicons {
  size: string;
  img: string;
  class?: string;
  style?: string;
  extraClass?: string;
  visible?: string;
}
interface pricingPlan {
  name: string;
  price: string;
  priceUnit: string;
  btnText: string;
  btnClass: string;
  btnLink: string;
  bgClass: string;
  textClass: string;
  footer: string;
  highlight: boolean;
}

interface featuresStat {
   value: number;
    suffix: string;
    text: string;
    color: string;
}

export const clientsLogo: clientLogo[] = [
  {
    grayLogo: 'assets/images/client/logo-gray/01.svg',
    lightLogo: 'assets/images/client/logo-light/01.svg',
    darkLogo: 'assets/images/client/logo-dark/01.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/02.svg',
    lightLogo: 'assets/images/client/logo-light/02.svg',
    darkLogo: 'assets/images/client/logo-dark/02.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/03.svg',
    lightLogo: 'assets/images/client/logo-light/03.svg',
    darkLogo: 'assets/images/client/logo-dark/03.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/04.svg',
    lightLogo: 'assets/images/client/logo-light/04.svg',
    darkLogo: 'assets/images/client/logo-dark/04.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/05.svg',
    lightLogo: 'assets/images/client/logo-light/05.svg',
    darkLogo: 'assets/images/client/logo-dark/05.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/06.svg',
    lightLogo: 'assets/images/client/logo-light/06.svg',
    darkLogo: 'assets/images/client/logo-dark/06.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/07.svg',
    lightLogo: 'assets/images/client/logo-light/07.svg',
    darkLogo: 'assets/images/client/logo-dark/07.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/08.svg',
    lightLogo: 'assets/images/client/logo-light/08.svg',
    darkLogo: 'assets/images/client/logo-dark/08.svg',
  },
  {
    grayLogo: 'assets/images/client/logo-gray/09.svg',
    lightLogo: 'assets/images/client/logo-light/09.svg',
    darkLogo: 'assets/images/client/logo-dark/09.svg',
  },
];

export const testimonials: testimonial[] = [
  {
    image: 'assets/images/avatar/09.jpg',
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.",
    rating: 4.5,
    name: 'Jacqueline Miller',
    position: 'Product designer',
  },
  {
    image: 'assets/images/avatar/02.jpg',
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    rating: 5,
    name: 'Louis Ferguson',
    position: 'Web Developer',
  },
  {
    image: 'assets/images/avatar/04.jpg',
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    rating: 4.5,
    name: 'Emma Watson',
    position: 'UI/UX designer',
  },
];

export const faqs: faq[] = [
  {
    id: 1,
    icon: 'bi-lightbulb',
    title: 'Accelerate brainstorming with AI',
    content:
      'Our AI-powered tool helps you brainstorm faster by providing instant suggestions and creative prompts, enabling you to stay ahead of the competition and bring your visions to life effortlessly.',
    open: true,
  },
  {
    id: 2,
    icon: 'bi-boxes',
    title: 'Instant access to accurate information',
    content:
      'Obtain reliable and factual content at lightning speed. Our advanced AI ensures you get precise and verified information quickly, saving you time and effort in research while ensuring your content is always accurate and trustworthy.',
    open: false,
  },
  {
    id: 3,
    icon: 'bi-transparency',
    title: 'Seamless content distribution',
    content:
      'Reach your audience wherever they are. Our platform allows you to publish content effortlessly across multiple channels, ensuring your message is delivered consistently and effectively.',
    open: false,
  },
];

export const listContent: string[] = [
  'Boost feature adoption and engagement',
  'Write creatively in any language',
  'Scalable solutions for your growth',
  'Unlock possibilities with advanced analytics',
];

export const integrationsicons: integrationicons[] = [
  {
    size: 'icon-md',
    img: 'assets/images/client/icons/04.svg',
    class: 'w-20px',
    visible: 'd-none d-md-block',
  },
  {
    size: 'icon-lg',
    img: 'assets/images/client/icons/05.svg',
    class: 'w-30px',
    visible: 'd-none d-sm-block',
  },
  {
    size: 'icon-xl',
    img: 'assets/images/client/icons/02.svg',
    class: 'h-40px',
    style: 'line-height: 4.3rem;',
  },
  {
    size: 'icon-xl',
    img: 'assets/images/client/icons/01.svg',
    class: 'h-40px',
    style: 'line-height: 4.3rem;',
  },
  {
    size: 'icon-xxl',
    img: 'assets/images/logo-icon.svg',
    class: 'h-60px',
    style: 'line-height: 6.8rem;',
    extraClass: 'ripple-anim',
  },
  {
    size: 'icon-xl',
    img: 'assets/images/client/icons/06.svg',
    class: 'h-40px',
    style: 'line-height: 4.3rem;',
  },
  {
    size: 'icon-xl',
    img: 'assets/images/client/icons/07.svg',
    class: 'w-30px',
  },
  {
    size: 'icon-lg',
    img: 'assets/images/client/icons/08.svg',
    class: 'w-30px',
    visible: 'd-none d-sm-block',
  },
  {
    size: 'icon-md',
    img: 'assets/images/client/icons/09.svg',
    class: 'w-20px',
    visible: 'd-none d-md-block',
  },
];

export const pricingPlans: pricingPlan[] = [
  {
    name: 'Free',
    price: '$0',
    priceUnit: '/month',
    btnText: 'Sign up now',
    btnClass: 'btn btn-outline-primary mb-0',
    btnLink: '/auth/sign-up',
    bgClass: 'bg-secondary bg-opacity-75',
    textClass: 'text-center',
    footer: 'Limited to 100 conversations per month',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$59',
    priceUnit: '/month',
    btnText: 'Upgrade Now',
    btnClass: 'btn btn-dark mb-0',
    btnLink: '/pricing-v2',
    bgClass: 'bg-primary',
    textClass: 'text-center',
    footer: 'Detailed analytics and reporting',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceUnit: '',
    btnText: 'Request pricing',
    btnClass: 'btn btn-outline-primary mb-0',
    btnLink: '/pricing-v2',
    bgClass: 'bg-secondary bg-opacity-75',
    textClass: 'text-center',
    footer: 'Custom integration and development',
    highlight: false,
  },
];


export const featuresStats :featuresStat[] = [
  {
    value: 5,
    suffix: 'x',
    text: 'Boost content production',
    color: 'text-primary',
  },
  {
    value: 85,
    suffix: '%',
    text: 'Save time on prospecting efforts',
    color: 'text-purple',
  },
  {
    value: 68,
    suffix: '%',
    text: 'Reduce editing time',
    color: 'text-pink',
  },
];
