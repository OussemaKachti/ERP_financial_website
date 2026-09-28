interface testimonials {
  rating: number;
  text: string;
  name: string;
  position: string;
}

interface skills {
  value: number;
  suffix: string;
  text: string;
  divider: boolean;
  color: string;
  extraSymbol?: string;
  extraclass:string;
  dividerPosition?: string
  flexClass:string
}

interface services {
  src: string;
  alt: string;
}

interface serviceData {
  title: string;
  icon: string;
  link: string;
}

interface project {
  image: string;
  alt: string;
  client_logo: string;
  client_logo_alt: string;
  title: string;
  link: string;
}

interface clientdatas {
  light_mode_image: string;
  dark_mode_image: string;
  alt: string;
}

interface Tab {
  id: string;
  title: string;
  icon: string;
  content: string;
  list: string[];
}

export const testimonial: testimonials[] = [
  {
    rating: 4.5,
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled.",
    name: 'Jacqueline Miller',
    position: 'Product designer',
  },
  {
    rating: 5,
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    name: 'Louis Ferguson',
    position: 'Web Developer',
  },
  {
    rating: 5,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    name: 'Emma Watson',
    position: 'UI/UX designer',
  },
];

export const skill: skills[] = [
  {
    value: 105,
    suffix: '+',
    text: 'Total projects completed',
    divider: true,
    dividerPosition: "after",
    color: 'primary',
    extraclass:"col-md-4",
    flexClass: 'd-flex align-items-center justify-content-between'
  },
  {
    value: 35,
    suffix: '+',
    text: 'Awards and accolades',
    divider: false,    
    dividerPosition: "",
    color: 'purple',
    extraclass:"col-md-4",
    flexClass: 'd-flex justify-content-center'  // Center this one
  },
  {
    value: 10,
    suffix: 'K',
    text: 'Satisfied users',
    divider: true,
    dividerPosition: "before",
    color: 'pink',
    extraSymbol: '>',
    extraclass:"col-md-4",
    flexClass: 'd-flex align-items-center justify-content-between'
  },
];

export const service: services[] = [
  {
    src: 'assets/images/client/icons/08.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/04.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/12.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/09.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/05.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/03.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/02.svg',
    alt: 'icon',
  },
  {
    src: 'assets/images/client/icons/10.svg',
    alt: 'icon',
  },
];

export const servicesData: serviceData[] = [
  {
    title: 'AI consulting and strategy',
    icon: 'assets/images/services/geo-shape/01.svg',
    link: '/service-single',
  },
  {
    title: 'Natural language processing (NLP)',
    icon: 'assets/images/services/geo-shape/02.svg',
    link: '/service-single',
  },
  {
    title: 'Custom AI development',
    icon: 'assets/images/services/geo-shape/03.svg',
    link: '/service-single',
  },
  {
    title: 'AI-Powered automation',
    icon: 'assets/images/services/geo-shape/04.svg',
    link: '/service-single',
  },
  {
    title: 'Computer vision solutions',
    icon: 'assets/images/services/geo-shape/05.svg',
    link: '/service-single',
  },
];

export const projects: project[] = [
  {
    image: 'assets/images/portfolio/4by4/01.jpg',
    alt: 'portfolio-img',
    client_logo: 'assets/images/client/logo-light/05.svg',
    client_logo_alt: 'client logo',
    title: 'AI-Driven customer insights platform',
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/4by4/02.jpg',
    alt: 'portfolio-img',
    client_logo: 'assets/images/client/logo-light/06.svg',
    client_logo_alt: 'client logo',
    title: 'Automated customer support with NLP',
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/4by4/03.jpg',
    alt: 'portfolio-img',
    client_logo: 'assets/images/client/logo-light/08.svg',
    client_logo_alt: 'client logo',
    title: 'Smart inventory management for retail',
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/4by4/04.jpg',
    alt: 'portfolio-img',
    client_logo: 'assets/images/client/logo-light/02.svg',
    client_logo_alt: 'client logo',
    title: 'AI-powered fraud detection',
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/4by4/05.jpg',
    alt: 'portfolio-img',
    client_logo: 'assets/images/client/logo-light/03.svg',
    client_logo_alt: 'client logo',
    title: 'AI-Driven customer insights platform',
    link: 'portfolio-case-study-v1',
  },
];

export const clientdata: clientdatas[] = [
  {
    light_mode_image: 'assets/images/client/logo-light/03.svg',
    dark_mode_image: 'assets/images/client/logo-dark/03.svg',
    alt: 'client logo',
  },
  {
    light_mode_image: 'assets/images/client/logo-light/08.svg',
    dark_mode_image: 'assets/images/client/logo-dark/08.svg',
    alt: 'client logo',
  },
  {
    light_mode_image: 'assets/images/client/logo-light/09.svg',
    dark_mode_image: 'assets/images/client/logo-dark/09.svg',
    alt: 'client logo',
  },
  {
    light_mode_image: 'assets/images/client/logo-light/02.svg',
    dark_mode_image: 'assets/images/client/logo-dark/02.svg',
    alt: 'client logo',
  },
  {
    light_mode_image: 'assets/images/client/logo-light/10.svg',
    dark_mode_image: 'assets/images/client/logo-dark/10.svg',
    alt: 'client logo',
  },
  {
    light_mode_image: 'assets/images/client/logo-light/06.svg',
    dark_mode_image: 'assets/images/client/logo-dark/06.svg',
    alt: 'client logo',
  },
];

export const tabs: Tab[] = [
  {
    id: 'tab1',
    title: 'Our Mission',
    icon: 'bi bi-bullseye',
    content:
      'We strive to be the trusted partner that helps our clients navigate the complexities of the digital age with confidence and ease',
    list: [
      'Advanced AI technology',
      'Boosting efficiency with optimized workflows',
      'Driving sustainable growth with insights',
    ],
  },
  {
    id: 'tab2',
    title: 'Our Vision',
    icon: 'bi bi-eye',
    content:
      "Effective design communicates your brand's identity, cultivates trust, and can significantly impact conversion rates and customer loyalty.",
    list: ['Tailored solutions', 'Proven track Record', 'Cost-effectiveness'],
  },
  {
    id: 'tab3',
    title: 'Our Goal',
    icon: 'bi bi-trophy',
    content:
      'We provide a range of tools, guides, and best practices to help you create designs, websites.',
    list: [
      'Digital pioneers',
      'Continuous learning',
      'Inspiring transformation',
    ],
  },
];
