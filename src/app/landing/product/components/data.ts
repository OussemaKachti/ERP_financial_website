interface feature {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface feature2 {
  iconClass: string;
  icon: string;
  title: string;
  description: string;
}

interface product {
  image: string;
  alt: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

interface testimonial {
  avatar: string;
  name: string;
  position: string;
  stars: number[];
  halfStar: boolean;
  content: string;
}

export const features: feature[] = [
  {
    image: 'assets/images/product/features/01.jpg',
    alt: 'Advanced fitness tracking',
    title: 'Advanced fitness tracking',
    description:
      'Helping you stay on top of your health and fitness goals every step of the way',
  },
  {
    image: 'assets/images/product/features/02.jpg',
    alt: 'Heart rate Monitoring',
    title: 'Heart rate Monitoring',
    description: 'Monitor your heart rate in real-time',
  },
  {
    image: 'assets/images/product/features/03.jpg',
    alt: 'GPS Navigation',
    title: 'GPS Navigation',
    description: 'Helps you navigate and track your routes.',
  },
  {
    image: 'assets/images/product/features/04.jpg',
    alt: 'Voice assistant',
    title: 'Voice assistant',
    description:
      'Voice commands to set reminders, check the weather, and more.',
  },
  {
    image: 'assets/images/product/features/05.jpg',
    alt: 'Connectivity',
    title: 'Connectivity',
    description: 'Stay connected with your devices, using Bluetooth and Wi-Fi',
  },
];
export const features2: feature2[] = [
  {
    iconClass: 'text-primary',
    icon: 'bi bi-smartwatch',
    title: 'High-resolution display',
    description:
      'Personalize your watch with a variety of designs and layouts.',
  },
  {
    iconClass: 'text-pink',
    icon: 'bi bi-app-indicator',
    title: 'Smart notifications',
    description:
      'Receive calls, messages, and app notifications directly on your wrist',
  },
  {
    iconClass: 'text-success',
    icon: 'bi bi-battery-full',
    title: 'Long battery life',
    description: 'Enjoy up to 7 days of battery life on a single charge.',
  },
  {
    iconClass: 'text-purple',
    icon: 'bi bi-droplet-fill',
    title: 'Water resistant design',
    description:
      'Waterproof up to 50 meters, perfect for swimming and showering',
  },
  {
    iconClass: 'text-warning',
    icon: 'bi bi-music-note-list',
    title: 'Music control',
    description:
      'Personalize your watch with a variety of designs and layouts.',
  },
];

export const products: product[] = [
  {
    image: 'assets/images/product/watches/01.png',
    alt: 'Apex Pro',
    name: 'Apex Pro',
    description: 'Perfect for athletes and tech enthusiasts alike.',
    price: '$358',
  },
  {
    image: 'assets/images/product/watches/02.png',
    alt: 'Classic Fit v2',
    name: 'Classic Fit v2',
    description: 'Perfect for athletes and tech enthusiasts alike.',
    price: '$275.00',
    originalPrice: '$320.00',
    discount: '20% off',
  },
  {
    image: 'assets/images/product/watches/03.png',
    alt: 'Active Sport SE',
    name: 'Active Sport SE',
    description:
      'Stay connected and on top of your health goals with this watch.',
    price: '$410',
  },
  {
    image: 'assets/images/product/watches/04.png',
    alt: 'Luxe Edition Ultra 2',
    name: 'Luxe Edition Ultra 2',
    description: 'Perfect for athletes and tech enthusiasts alike.',
    price: '$358',
  },
];
export const testimonials: testimonial[] = [
  {
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Jacqueline Miller',
    position: 'Product designer',
    stars: [1, 2, 3, 4],
    halfStar: true,
    content:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience. Was out laughter raptures returned outweigh.",
  },
  {
    avatar: 'assets/images/avatar/02.jpg',
    name: 'Louis Ferguson',
    position: 'Web Developer',
    stars: [1, 2, 3, 4],
    halfStar: true,
    content:
      'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
  },
  {
    avatar: 'assets/images/avatar/06.jpg',
    name: 'Samuel Bishop',
    position: 'UI/UX designer',
    stars: [1, 2, 3, 4],
    halfStar: true,
    content:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
];
