

interface service {
  col: {
    name: string;
    link: string;
  }[];
}

interface value {
  icon: string;
  color: string;
  title: string;
  description: string;
}

interface Industry {
  image: string;
  title: string;
  description: string;
}

interface team {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: string;
    class: string;
    url: never[];
  }[];
}

interface avatar {
  src: string;
  alt: string;
}

interface client {
  dark: string;
  light: string;
}

export const services: service[] = [
  {
    col: [
      { name: 'Financial advisory', link: '/service-single' },
      { name: 'Consulting', link: '/service-single' },
      { name: 'Management', link: '/service-single' },
      { name: 'Data analysis', link: '/service-single' },
      { name: 'Debt management', link: '/service-single' },
    ],
  },
  {
    col: [
      { name: 'Legal & Tax', link: '/service-single' },
      { name: 'Business consulting', link: '/service-single' },
      { name: 'Risk advisory', link: '/service-single' },
    ],
  },
];

export const values: value[] = [
  {
    icon: 'bi bi-rocket-takeoff-fill fa-lg',
    color: 'text-success',
    title: 'Integrity',
    description:
      'We uphold the highest standards of integrity in all our actions.',
  },
  {
    icon: 'bi bi-person-lines-fill fa-lg',
    color: 'text-pink',
    title: 'Client approach',
    description: 'Your needs and goals are at the heart of everything we do.',
  },
  {
    icon: 'bi bi-award fa-lg',
    color: 'text-info',
    title: 'Excellence',
    description:
      'Our experts are dedicated to delivering the highest quality services.',
  },
  {
    icon: 'bi bi-fire fa-lg',
    color: 'text-purple',
    title: 'Innovation',
    description:
      'Embracing innovation to lead in the dynamic financial landscape.',
  },
];

export const industries: Industry[] = [
  {
    image: 'assets/images/services/finance/01.jpg',
    title: 'Healthcare industry',
    description:
      'Our team provides specialized financial consulting for healthcare providers, ensuring sustainable.',
  },
  {
    image: 'assets/images/services/finance/03.jpg',
    title: 'Real estate sector',
    description:
      'From property management to development projects, we deliver expert financial advice to maximize.',
  },
  {
    image: 'assets/images/services/finance/02.jpg',
    title: 'Manufacturing industry',
    description:
      'Our financial experts understand the unique challenges of the manufacturing sector industry.',
  },
  {
    image: 'assets/images/services/finance/04.jpg',
    title: 'Retail sector',
    description:
      'We support retail businesses with comprehensive financial services, including inventory management.',
  },
];

export const teams: team[] = [
  {
    name: 'Jane Doe',
    role: 'Chief Financial Officer',
    image: 'assets/images/team/01.jpg',
    socials: [
      {
        icon: 'bi-facebook',
        class: 'text-facebook',
        url: [],
      },
      {
        icon: 'bi-twitter-x',
        class: 'text-twitter-x',
        url: [],
      },
      {
        icon: 'bi-instagram',
        class: 'text-instagram-gradient',
        url: [],
      },
    ],
  },
  {
    name: 'Michael Brown',
    role: 'Investment Strategist',
    image: 'assets/images/team/02.jpg',
    socials: [
      {
        icon: 'bi-facebook',
        class: 'text-facebook',
        url: [],
      },
      {
        icon: 'bi-instagram',
        class: 'text-instagram-gradient',
        url: [],
      },
    ],
  },
  {
    name: 'Louis Ferguson',
    role: 'Tax Specialist',
    image: 'assets/images/team/04.jpg',
    socials: [
      {
        icon: 'bi-facebook',
        class: 'text-facebook',
        url: [],
      },
      {
        icon: 'bi-twitter-x',
        class: 'text-twitter-x',
        url: [],
      },
    ],
  },
  {
    name: 'Amanda Reed',
    role: 'Senior Financial Advisor',
    image: 'assets/images/team/03.jpg',
    socials: [
      {
        icon: 'bi-facebook',
        class: 'text-facebook',
        url: [],
      },
      {
        icon: 'bi-twitter-x',
        class: 'text-twitter-x',
        url: [],
      },
      {
        icon: 'bi-instagram',
        class: 'text-instagram-gradient',
        url: [],
      },
    ],
  },
];

export const avatars: avatar[] = [
  { src: 'assets/images/avatar/01.jpg', alt: 'avatar 1' },
  { src: 'assets/images/avatar/02.jpg', alt: 'avatar 2' },
  { src: 'assets/images/avatar/03.jpg', alt: 'avatar 3' },
  { src: 'assets/images/avatar/08.jpg', alt: 'avatar 4' },
  { src: 'assets/images/avatar/07.jpg', alt: 'avatar 5' },
];

export const clients: client[] = [
  {
    dark: 'assets/images/client/logo-dark/01.svg',
    light: 'assets/images/client/logo-light/01.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/07.svg',
    light: 'assets/images/client/logo-light/07.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/08.svg',
    light: 'assets/images/client/logo-light/08.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/02.svg',
    light: 'assets/images/client/logo-light/02.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/03.svg',
    light: 'assets/images/client/logo-light/03.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/04.svg',
    light: 'assets/images/client/logo-light/04.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/05.svg',
    light: 'assets/images/client/logo-light/05.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/11.svg',
    light: 'assets/images/client/logo-light/11.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/10.svg',
    light: 'assets/images/client/logo-light/10.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/06.svg',
    light: 'assets/images/client/logo-light/06.svg',
  },
  {
    dark: 'assets/images/client/logo-dark/09.svg',
    light: 'assets/images/client/logo-light/09.svg',
  },
];
