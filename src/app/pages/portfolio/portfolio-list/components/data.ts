interface portfolioDatas {
    image: string;
    title: string;
    description: string;
    clientLogo: string;
    darkLogo: string;
    tags: string[];
    link: string;
}

export const portfolioData :portfolioDatas[] = [
  {
    image: 'assets/images/portfolio/list/04.jpg',
    title: 'Mobile app development',
    description:
      'The app received positive feedback for its functionality and user experience, helping the client reach a wider audience.',
    clientLogo: 'assets/images/client/logo-dark/01.svg',
    darkLogo: 'assets/images/client/logo-light/01.svg',
    tags: ['2024', 'Branding', 'Packaging', 'UI/UX design'],
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/list/02.jpg',
    title: 'Brand identity development',
    description:
      'The most powerful software & app landing page for any kind of app and software marketing business.',
    clientLogo: 'assets/images/client/logo-dark/03.svg',
    darkLogo: 'assets/images/client/logo-light/03.svg',
    tags: ['2023', 'Graphics', 'UI/UX design'],
    link: 'portfolio-case-study-v2',
  },
  {
    image: 'assets/images/portfolio/list/03.jpg',
    title: 'Transforming ideas into reality',
    description:
      "The website significantly improved the client's online sales and customer engagement.",
    clientLogo: 'assets/images/client/logo-dark/08.svg',
    darkLogo: 'assets/images/client/logo-light/08.svg',
    tags: ['2021', 'Web Design', 'Branding', 'UI/UX design'],
    link: 'portfolio-case-study-v1',
  },
  {
    image: 'assets/images/portfolio/list/01.jpg',
    title: 'Digital marketing overhaul',
    description:
      'Designed and developed a responsive e-commerce platform for folio agency retail.',
    clientLogo: 'assets/images/client/logo-dark/05.svg',
    darkLogo: 'assets/images/client/logo-light/05.svg',
    tags: ['2020', 'Marketing', 'SEO', 'Social media'],
    link: 'portfolio-case-study-v2',
  },
];
