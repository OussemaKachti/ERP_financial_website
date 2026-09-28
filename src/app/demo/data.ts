interface  demo {
 src: string;
    alt: string;
}

interface landings {
   src: string;
    alt: string;
    title: string;
    link: string;
}

 interface feature {
  img: string;
    title: string;
    desc: string;
    imgClass: string;
    headerClass: string;
 }

export const demos:demo[] = [
  {
    src: 'assets/images/pages-ss/14.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/02.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/03.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/04.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/05.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/06.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/07.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/08.jpg',
    alt: 'portfolio-img',
  },
  {
    src: 'assets/images/pages-ss/09.jpg',
    alt: 'portfolio-img',
  },
];

export const landing:landings[] = [
  {
    src: 'assets/images/pages-ss/demos/01.jpg',
    alt: '',
    title: 'Main home',
    link: '/home-default',
  },
  {
    src: 'assets/images/pages-ss/demos/02.jpg',
    alt: '',
    title: 'Software company',
    link: '/home-software',
  },
  {
    src: 'assets/images/pages-ss/demos/03.jpg',
    alt: '',
    title: 'Finance consulting',
    link: '/home-finance',
  },
  {
    src: 'assets/images/pages-ss/demos/04.jpg',
    alt: '',
    title: 'AI agency',
    link: '/home-agency',
  },
  {
    src: 'assets/images/pages-ss/demos/05.jpg',
    alt: '',
    title: 'Product landing',
    link: '/home-product',
  },
  {
    src: 'assets/images/pages-ss/demos/06.jpg',
    alt: '',
    title: 'SaaS',
    link: '/home-saas',
  },
  {
    src: 'assets/images/pages-ss/demos/07.jpg',
    alt: '',
    title: 'AI chatbot SaaS',
    link: '/home-chatbox',
  },
  {
    src: 'assets/images/pages-ss/demos/08.jpg',
    alt: '',
    title: 'Application showcase',
    link: '/home-application',
  },
  {
    src: 'assets/images/pages-ss/demos/09.jpg',
    alt: '',
    title: 'Personal portfolio',
    link: '/home-portfolio',
  },
  {
    src: 'assets/images/pages-ss/demos/10.jpg',
    alt: '',
    title: 'Blog home',
    link: '/home-blog',
  },
];

export const features:feature[] = [
  {
    img: 'assets/images/pages-ss/features/01.svg',
    title: 'Powered by Bootstrap 5',
    desc: 'Leverage the robust Bootstrap framework for responsive design',
    imgClass: '',
    headerClass: 'p-4',
  },
  {
    img: 'assets/images/pages-ss/features/02.svg',
    title: 'Specialized Components',
    desc: 'Enhance your site with exclusive, ready-to-use components',
    imgClass: 'h-200px',
    headerClass: 'p-0',
  },
  {
    img: 'assets/images/pages-ss/features/03.svg',
    title: 'Light/Dark mode',
    desc: 'Switch effortlessly between light and dark modes.',
    imgClass: '',
    headerClass: 'p-3',
  },
];
