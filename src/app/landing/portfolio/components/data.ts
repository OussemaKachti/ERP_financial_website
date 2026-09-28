interface skill {
  category: string;
  description: string;
  icon: string;
  bgColor: string;
  link: any[];
}

interface project {
  title: string;
  category: string;
  image: string;
  link: string;
  year: string;
}

interface socialLink {
  name: string;
  icon: string;
  class: string;
  link: any[];
}

interface counter {
  count: number;
  suffix: string;
  text: string;
  displayClass: string;
  colClass: string;
}

export const skills: skill[] = [
  {
    category: 'Web application development',
    description:
      'Building robust and scalable web applications tailored to your business processes.',
    icon: 'bi bi-pc-display',
    bgColor: 'bg-warning',
    link: [],
  },
  {
    category: 'UI/UX design',
    description:
      'I focus on creating interfaces that are both visually appealing and easy to use.',
    icon: 'bi bi-vector-pen',
    bgColor: 'bg-pink',
    link: [],
  },
  {
    category: 'Web maintenance & support',
    description: 'From regular updates to troubleshooting and security checks.',
    icon: 'bi bi-globe2',
    bgColor: 'bg-info',
    link: [],
  },
  {
    category: 'E-commerce solutions',
    description:
      'Powerful e-commerce platforms that drive sales and enhance the shopping experience.',
    icon: 'bi bi-cart-check',
    bgColor: 'bg-success',
    link: [],
  },
];

export const projects: project[] = [
  {
    title: 'Brand Identity Development',
    category: 'Logo design',
    image: 'assets/images/portfolio/list/02.jpg',
    link: '/portfolio-case-study-v2',
    year: '2022',
  },
  {
    title: 'ShopSmart',
    category: 'E-commerce',
    image: 'assets/images/portfolio/3by4/08.jpg',
    link: '/portfolio-case-study-v2',
    year: '2023',
  },
  {
    title: 'TechWave',
    category: 'Animation',
    image: 'assets/images/portfolio/4by4/03.jpg',
    link: '/portfolio-case-study-v2',
    year: '2022',
  },
  {
    title: 'Digital marketing overhaul',
    category: 'Marketing',
    image: 'assets/images/portfolio/04.jpg',
    link: '/portfolio-case-study-v2',
    year: '2021',
  },
];

export const developmentTips = [
  {
    title: '10 essential tips for crafting a stunning website',
    date: 'Aug 28, 2024',
    readTime: '5 min read',
    image: 'assets/images/blog/4by4/03.jpg',
    link: '/blog-single',
  },
  {
    title: 'The future of UI/UX design: trends to watch in 2024',
    date: 'Aug 18, 2024',
    readTime: '5 min read',
    image: 'assets/images/blog/4by4/01.jpg',
    link: '/blog-single',
  },
  {
    title: 'Behind the scenes of my latest web project',
    date: 'Aug 12, 2024',
    readTime: '5 min read',
    image: 'assets/images/blog/4by4/06.jpg',
    link: '/blog-single',
  },
  {
    title: 'How to optimize your website for SEO in 2024',
    date: 'Aug 12, 2024',
    readTime: '5 min read',
    image: 'assets/images/blog/4by4/05.jpg',
    link: '/blog-single',
  },
];

export const socialLinks: socialLink[] = [
  {
    name: 'Facebook',
    icon: 'bi bi-facebook lh-base',
    class: 'bg-facebook',
    link: [],
  },
  {
    name: 'Instagram',
    icon: 'bi bi-instagram lh-base',
    class: 'bg-instagram-gradient',
    link: [],
  },
  {
    name: 'Twitter',
    icon: 'bi bi-twitter-x lh-base',
    class: 'bg-twitter-x',
    link: [],
  },
  {
    name: 'LinkedIn',
    icon: 'bi bi-linkedin lh-base',
    class: 'bg-linkedin',
    link: [],
  },
];

export const counters: counter[] = [
  {
    count: 14,
    suffix: '+',
    text: 'Years of experience',
    displayClass: 'display-4',
    colClass: 'col-12 border-bottom border-primary border-opacity-25 mb-3',
  },
  {
    count: 68,
    suffix: '+',
    text: 'Successful projects',
    displayClass: 'h2',
    colClass: 'col-sm-6',
  },
  {
    count: 105,
    suffix: '+',
    text: 'Satisfied clients',
    displayClass: 'h2',
    colClass: 'col-sm-6',
  },
];
