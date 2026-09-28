interface abouts {
  headerText: string;
  counterEnd: number;
  footerText: string;
  arrow?: boolean;
}

interface teams {
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: any[];
    twitter?: any[];
    instagram?: any[];
  };
}

interface feature {
    title: string;
    icon: string;
    color: string;
    text: string;
}

export const about: abouts[] = [
  {
    headerText: 'Engaging users across our 2024 platforms',
    counterEnd: 3500,
    footerText: '+',
  },
  {
    headerText: 'Showcasing creative excellence in every project',
    counterEnd: 105,
    footerText: '+',
    arrow: true,
  },
  {
    headerText: 'Track and analyze business reports',
    counterEnd: 97,
    footerText: '%',
  },
  {
    headerText: 'Enhanced growth in onboarding conversions',
    counterEnd: 68,
    footerText: '%',
  },
];

export const team: teams[] = [
  {
    name: 'Emma Watson',
    role: 'Co-Founder / CEO',
    image: 'assets/images/team/01.jpg',
    social: {
      facebook: [],
      twitter: [],
      instagram: [],
    },
  },
  {
    name: 'Allen Smith',
    role: 'Finance',
    image: 'assets/images/team/02.jpg',
    social: {
      facebook: [],
      twitter: [],
      instagram: [],
    },
  },
  {
    name: 'Louis Ferguson',
    role: 'Recruiting',
    image: 'assets/images/team/04.jpg',
    social: {
      facebook: [],
      twitter: [],
    },
  },
  {
    name: 'Frances Guerrero',
    role: 'Product Manager',
    image: 'assets/images/team/03.jpg',
    social: {
      facebook: [],
      instagram: [],
    },
  },
  {
    name: 'Amanda Reed',
    role: 'Solution Engineer',
    image: 'assets/images/team/05.jpg',
    social: {
      twitter: [],
      instagram: [],
    },
  },
];

export const companyicons: string[] = [
  'assets/images/client/icons/08.svg',
  'assets/images/client/icons/04.svg',
  'assets/images/client/icons/12.svg',
  'assets/images/client/icons/09.svg',
  'assets/images/client/icons/05.svg',
  'assets/images/client/icons/03.svg',
  'assets/images/client/icons/02.svg',
  'assets/images/client/icons/10.svg',
];

export const features :feature[]= [
  {
    title: 'Our mission',
    icon: 'bi bi-lightning-charge-fill',
    color: 'text-success',
    text: 'We empower brands with visually compelling solutions that drive engagement and leave a lasting impact.',
  },
  {
    title: 'Our vision',
    icon: 'bi bi-rocket-takeoff-fill',
    color: 'text-pink',
    text: 'Folio is to be recognized as a leading force in the world of visual communication.',
  },
  {
    title: 'Our goal',
    icon: 'bi bi-bullseye',
    color: 'text-warning',
    text: "Our aim is to not only meet our clients' objectives but to surpass them, earning their trust and loyalty along the way.",
  },
];
