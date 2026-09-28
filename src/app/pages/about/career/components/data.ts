interface heroImages {
  class: string;
  image: string;
}

interface jobs {
  title: string;
  location: string;
  category: string;
  link: string;
}
interface reviews {
  rating: number;
  text: string;
  avatar: string;
  name: string;
  role: string;
}

interface sellingPoints {
  title: string;
  icon: string;
  color: string;
  description: string;
  link: never[];
}
interface step {
  id: string;
  title: string;
  heading: string;
  description: string;
  img: string;
  disabled: boolean;
}

export const heroImage: heroImages[] = [
  {
    class:
      'avatar avatar-xl flex-shrink-0 position-absolute top-0 start-0 mt-6 ms-n3 d-none d-lg-block',
    image: 'assets/images/avatar/10.jpg',
  },
  {
    class:
      'avatar flex-shrink-0 position-absolute top-0 start-50 translate-middle-x ms-n9 mt-n6 d-none d-lg-block',
    image: 'assets/images/avatar/02.jpg',
  },
  {
    class:
      'avatar avatar-lg flex-shrink-0 position-absolute top-0 end-0 me-7 mt-n4 d-none d-lg-block',
    image: 'assets/images/avatar/06.jpg',
  },
  {
    class:
      'avatar avatar-xxl flex-shrink-0 position-absolute bottom-50 end-0 mb-n9 me-n3 d-none d-lg-block',
    image: 'assets/images/avatar/09.jpg',
  },
  {
    class:
      'avatar flex-shrink-0 position-absolute bottom-0 start-0 ms-8 mb-n3 d-none d-lg-block',
    image: 'assets/images/avatar/01.jpg',
  },
];

export const sellingPoint: sellingPoints[] = [
  {
    title: 'Collaborative culture',
    icon: 'bi bi-people',
    color: 'text-pink',
    description: 'Collaborative culture',
    link: [],
  },
  {
    title: 'Competitive benefits',
    icon: 'bi bi-bullseye',
    color: 'text-purple',
    description: 'Competitive benefits',
    link: [],
  },
  {
    title: 'Impactful projects',
    icon: 'bi bi-boxes',
    color: 'text-success',
    description: 'Impactful projects',
    link: [],
  },
  {
    title: 'Community focused',
    icon: 'bi bi-fire',
    color: 'text-primary',
    description: 'Community focused',
    link: [],
  },
  {
    title: 'Cutting-Edge technology',
    icon: 'bi bi-gem',
    color: 'text-info',
    description: 'Cutting-Edge technology',
    link: [],
  },
  {
    title: 'Inspiring leadership',
    icon: 'bi bi-layers',
    color: 'text-warning',
    description: 'Inspiring leadership',
    link: [],
  },
];

export const review: reviews[] = [
  {
    rating: 4.5,
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    avatar: 'assets/images/avatar/09.jpg',
    name: 'Jacqueline Miller',
    role: 'Product designer',
  },
  {
    rating: 5,
    text: 'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
    avatar: 'assets/images/avatar/10.jpg',
    name: 'Louis Ferguson',
    role: 'Web Developer',
  },
  {
    rating: 4.5,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    avatar: 'assets/images/avatar/04.jpg',
    name: 'Emma Watson',
    role: 'UI/UX designer',
  },
  {
    rating: 4.5,
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    avatar: 'assets/images/avatar/07.jpg',
    name: 'Allen Smith',
    role: 'Manager',
  },
  {
    rating: 4.5,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Emma Watson',
    role: 'UI/UX designer',
  },
];

export const job: jobs[] = [
  {
    title: 'Sales account executive',
    location: 'London',
    category: 'Sales',
    link: 'career-single.html',
  },
  {
    title: 'General office manager',
    location: 'Remote work',
    category: 'Software development',
    link: 'career-single.html',
  },
  {
    title: 'Machine learning specialist',
    location: 'New York',
    category: 'Design',
    link: 'career-single.html',
  },
  {
    title: 'Senior product manager',
    location: 'London',
    category: 'Sales',
    link: 'career-single.html',
  },
];

export const steps: step[] = [
  {
    id: 'process-one',
    title: '1. Application Submission',
    heading: 'What to Do',
    description:
      'Submit your application through our online portal. Make sure your resume is up-to-date and tailored to the specific position you’re applying for. Include a cover letter if required, highlighting your relevant experience and why you’re interested in joining',
    img: 'assets/images/career/steps/01.jpg',
    disabled: false,
  },
  {
    id: 'process-two',
    title: '2. Initial Screening',
    heading: 'What to Do',
    description:
      'This interview typically lasts 20-30 minutes and will be conducted via phone or video call. We’ll ask about your previous experience, your understanding of the role, and why you’re interested in working with us.',
    img: 'assets/images/career/steps/02.jpg',
    disabled: false,
  },
  {
    id: 'process-three',
    title: '3. First Interview',
    heading: 'What to Do',
    description:
      'Participate in an initial interview with a member of our HR team. This is your chance to learn more about company and to ask any questions you might have about the position or company culture.',
    img: 'assets/images/career/steps/03.jpg',
    disabled: false,
  },
  {
    id: 'process-four',
    title: '4. Technical/Skill Assessment',
    heading: 'What to Do',
    description:
      'Complete a technical/skills assessment related to the role...',
    img: 'assets/images/career/steps/04.jpg',
    disabled: true,
  },
  {
    id: 'process-five',
    title: '5. Final Interview',
    heading: 'What to Do',
    description:
      'Meet with senior management or team leaders for the final round...',
    img: 'assets/images/career/steps/05.jpg',
    disabled: true,
  },
];
