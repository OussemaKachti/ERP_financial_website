interface blogDatas {
  title: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  link: string;
}

interface category {
  name: string;
  count: number;
}
interface socialLink {
  platform: string;
  icon: string;
  link: any[];
}

interface post {
  id: number;
  category: string;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
}

interface authorData {
  name: string;
  blogs: number;
  image: string;
  social: {
    platform: string;
    icon: string;
    link: any[];
  }[];
}

interface highlightDatas {
  category: string;
  title: string;
  image?: string;
  link: string;
  video?: string;
}
export const blogData: blogDatas[] = [
  {
    title: 'The Power of Gratitude: Cultivating Joy and Abundance',
    author: 'Carolyn Ortiz',
    category: 'Technology',
    readTime: '5 min read',
    image: 'assets/images/blog/4by4/01.jpg',
    link: '/blog-single',
  },
  {
    title: '5 investment doubts you should clarify',
    author: 'Amanda Reed',
    category: 'Lifestyle',
    readTime: '10 min read',
    image: 'assets/images/blog/4by4/02.jpg',
    link: '/blog-single',
  },
  {
    title: 'Mastering Responsive Web Design with Bootstrap',
    author: 'Joan Wallace',
    category: 'Design',
    readTime: '7 min read',
    image: 'assets/images/blog/4by4/03.jpg',
    link: '/blog-single',
  },
  {
    title: 'Effortless Web Development with Folio',
    author: 'Lori Stevens',
    category: 'Marketing',
    readTime: '12 min read',
    image: 'assets/images/blog/4by4/04.jpg',
    link: '/blog-single',
  },
];
export const categories: category[] = [
  { name: 'All topics', count: 48 },
  { name: 'Digital', count: 12 },
  { name: 'Marketing', count: 5 },
  { name: 'Development', count: 10 },
  { name: 'Technology', count: 9 },
  { name: 'UI/UX design', count: 4 },
  { name: 'Lifestyle', count: 3 },
];
export const socialLinks: socialLink[] = [
  { platform: 'Facebook', icon: 'bi-facebook', link: [] },
  { platform: 'Instagram', icon: 'bi-instagram', link: [] },
  { platform: 'Twitter', icon: 'bi-twitter-x', link: [] },
  { platform: 'LinkedIn', icon: 'bi-linkedin', link: [] },
];
export const tags: string[] = [
  'blog',
  'business',
  'bootstrap',
  'data science',
  'deep learning',
  'Adventure',
  'Community',
  'Tutorials',
  'Interview',
  'Photography',
  'Classic',
];
export const authorsData: authorData[] = [
  {
    name: 'Emma Watson',
    blogs: 36,
    image: 'assets/images/team/01.jpg',
    social: [
      { platform: 'Facebook', icon: 'bi-facebook', link: [] },
      { platform: 'Twitter', icon: 'bi-twitter-x', link: [] },
      { platform: 'Instagram', icon: 'bi-instagram', link: [] },
    ],
  },
  {
    name: 'Allen Smith',
    blogs: 25,
    image: 'assets/images/team/02.jpg',
    social: [
      { platform: 'Facebook', icon: 'bi-facebook', link: [] },
      { platform: 'Twitter', icon: 'bi-twitter-x', link: [] },
      { platform: 'Instagram', icon: 'bi-instagram', link: [] },
    ],
  },
  {
    name: 'Louis Ferguson',
    blogs: 15,
    image: 'assets/images/team/04.jpg',
    social: [
      { platform: 'Facebook', icon: 'bi-facebook', link: [] },
      { platform: 'Twitter', icon: 'bi-twitter-x', link: [] },
    ],
  },
];
export const highlightData: highlightDatas[] = [
  {
    category: 'Lifestyle',
    title: 'Techniques to captivate your audience',
    image: 'assets/images/blog/01.jpg',
    link: '/blog-single',
  },
  {
    category: '',
    title: 'Never underestimate the influence',
    video: 'https://www.youtube.com/embed/9No-FiEInLA',
    link: '/blog-single',
  },
  {
    category: '',
    title: '10 things you need to know about Folio',
    video:
      'https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0',
    link: '/blog-single',
  },
  {
    category: 'Lifestyle',
    title: "Tips for improving your website's visibility",
    image: 'assets/images/blog/02.jpg',
    link: '/blog-single',
  },
];
export const posts: post[] = [
  {
    id: 1,
    category: 'Lifestyle',
    title: 'Building a strong identity for your business',
    image: 'assets/images/blog/4by3/03.jpg',
    author: { name: 'Louis', avatar: 'assets/images/avatar/05.jpg' },
    date: 'June 28, 2024',
    readTime: '5 min read',
  },
  {
    id: 2,
    category: 'Research',
    title: "Tips for improving your website's visibility",
    image: 'assets/images/blog/4by3/04.jpg',
    author: { name: 'Amanda', avatar: 'assets/images/avatar/09.jpg' },
    date: 'July 15, 2024',
    readTime: '5 min read',
  },
];
