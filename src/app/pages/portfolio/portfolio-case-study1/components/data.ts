interface detail {
  label: string;
  value: string;
}

interface slide {
  image: string;
  title: string;
  link: string;
  category: string;
}

interface counterData {
  prefix: string;
  count: number;
  suffix: string;
  color: string;
  text: string;
}

export const slides: slide[] = [
  {
    image: 'assets/images/portfolio/4by4/01.jpg',
    title: 'Mobile app development',
    link: '/portfolio-case-studies',
    category: 'UI/UX design',
  },
  {
    image: 'assets/images/portfolio/4by4/02.jpg',
    title: 'Digital marketing overhaul',
    link: '/portfolio-case-studies',
    category: 'Marketing',
  },
  {
    image: 'assets/images/portfolio/4by4/05.jpg',
    title: 'TechWave',
    link: '/portfolio-case-studies',
    category: 'Animation',
  },
];

export const details: detail[] = [
  { label: 'Category', value: 'Branding' },
  { label: 'Client', value: 'Webestica Agency' },
  { label: 'Location', value: '489 Depot Road Midland' },
  { label: 'Date', value: 'July 6, 2024' },
];

export const services = [
  [
    'Brand Development',
    'Art Direction',
    'Marketing Strategy',
    'Mobile App Design',
  ],
  [
    'Content Management',
    'System & Guides',
    'Graphic Design',
    'Brand Development',
  ],
];

export const countersData: counterData[] = [
  {
    prefix: '',
    count: 22,
    suffix: '%',
    color: 'text-primary',
    text: 'Increase in time spent on website',
  },
  {
    prefix: '',
    count: 4.5,
    suffix: 'M',
    color: 'text-purple',
    text: 'View this project got across our social media network',
  },
  {
    prefix: '$',
    count: 12.8,
    suffix: 'M',
    color: 'text-pink',
    text: 'Total raised in funding so far',
  },
];
