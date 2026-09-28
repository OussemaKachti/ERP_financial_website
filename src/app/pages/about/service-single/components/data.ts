interface benefit {
  title: string;
  description: string;
}

interface processes {
  step: number;
  title: string;
  description: string;
  color: string;
}

interface testimonials {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  testimonial: string;
}

interface faqData {
  id: number;
  title: string;
  content: string;
  open: boolean;
}
export const benefits: benefit[] = [
  {
    title: 'Custom Design',
    description:
      "We create tailor-made websites that reflect your brand's identity and engage your audience.",
  },
  {
    title: 'Scalability',
    description:
      'Our solutions are built to grow with your business, ensuring long-term success.',
  },
  {
    title: 'Performance optimization',
    description:
      'We ensure fast loading times and smooth user experiences to boost.',
  },
  {
    title: 'SEO-friendly',
    description:
      'Our websites are optimized for search engines to help you rank higher and attract more traffic.',
  },
];

export const process: processes[] = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description:
      'We begin by understanding your business goals, target audience, and project requirements.',
    color: 'primary-grad',
  },
  {
    step: 2,
    title: 'Design & Prototyping',
    description:
      'Our design team creates wireframes and prototypes based on the project plan.',
    color: 'primary-grad',
  },
  {
    step: 3,
    title: 'Development',
    description:
      'In this phase, our developers bring the design to life using the latest technologies and best practices.',
    color: 'primary-grad',
  },
  {
    step: 4,
    title: 'Testing & Launch',
    description:
      'Before going live, we conduct thorough testing to identify and fix any issues.',
    color: 'primary-grad',
  },
];

export const testimonial: testimonials[] = [
  {
    name: 'Jacqueline Miller',
    role: 'Product designer',
    avatar: 'assets/images/avatar/09.jpg',
    rating: 4.5,
    testimonial:
      'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
  },
  {
    name: 'Louis Ferguson',
    role: 'Web Developer',
    avatar: 'assets/images/avatar/10.jpg',
    rating: 5,
    testimonial:
      'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX designer',
    avatar: 'assets/images/avatar/04.jpg',
    rating: 4.5,
    testimonial:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
  {
    name: 'Allen Smith',
    role: 'Manager',
    avatar: 'assets/images/avatar/07.jpg',
    rating: 4.5,
    testimonial:
      "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
  },
  {
    name: 'Emma Watson',
    role: 'UI/UX designer',
    avatar: 'assets/images/avatar/01.jpg',
    rating: 4.5,
    testimonial:
      'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
  },
];

export const faqsData: faqData[] = [
  {
    id: 1,
    title: 'Frontend development',
    content:
      'We use the latest technologies like HTML5, CSS3, JavaScript, and frameworks such as React and Angular to create stunning interfaces that provide seamless user experiences across all devices.',
    open: true,
  },
  {
    id: 2,
    title: 'Backend development',
    content:
      'We build robust and scalable backend systems that power your website. Our expertise includes server-side scripting, database management, and API integration using technologies like Node.js, Python, Ruby on Rails, and PHP. We ensure your website performs efficiently and securely.',
    open: false,
  },
  {
    id: 3,
    title: 'E-commerce solutions',
    content:
      'Transform your business with our comprehensive e-commerce solutions. We develop custom online stores with features like product catalogs, shopping carts, payment gateways, and inventory management. Our solutions are designed to enhance user experience and boost sales.',
    open: false,
  },
  {
    id: 4,
    title: 'Content management systems (CMS)',
    content:
      'We offer custom CMS development and integration services to give you full control over your website content. Our expertise includes popular platforms like WordPress, Joomla, and Drupal. We create intuitive interfaces that make it easy to update and manage your website.',
    open: false,
  },
  {
    id: 5,
    title: 'Custom web applications',
    content:
      'Our team develops bespoke web applications tailored to your specific business needs. Whether you need a custom CRM, ERP, or any other type of web application, we leverage the latest technologies to deliver solutions that enhance your business processes.',
    open: false,
  },
];

export const technologicon: string[] = [
  'assets/images/client/icons/08.svg',
  'assets/images/client/icons/04.svg',
  'assets/images/client/icons/12.svg',
  'assets/images/client/icons/09.svg',
  'assets/images/client/icons/05.svg',
  'assets/images/client/icons/03.svg',
  'assets/images/client/icons/02.svg',
  'assets/images/client/icons/10.svg',
];
