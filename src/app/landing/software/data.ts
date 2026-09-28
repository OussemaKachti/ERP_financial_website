import { SafeHtml } from '@angular/platform-browser';

interface ClientLogo {
  gray: string;
  light: string;
  dark: string;
}

interface serviceType {
  title: string;
  description: string;
  link: string;
  icon: any;
  sanitizedIcon?: SafeHtml;
  color: string;
}

interface testimonials {
  rating: number;
  text: string;
  avatar: string;
  name: string;
  position: string;
}

interface avatar {
  src: string;
  alt: string;
}

interface PricingPlan  {
   name: string;
    price: number;
    billingCycle: string;
    popular: boolean;
    icon: string;
    currency: string;
    features: string[];
    button: {
        label: string;
        link: string;
        style: string;
    };
    cardStyle: {
        bg: string;
        text: string;
        extra: string;
    };
}

interface faqData {
   id: number;
    title: string;
    description: string;
}

const serviceIcon = `<svg width="40" height="40" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5587 22.5601C22.1315 22.9872 22.1315 23.6797 22.5587 24.1068C22.9858 24.534 23.6782 24.534 24.1054 24.1068L22.5587 22.5601ZM29.1654 17.5001L29.9387 18.2735C30.1439 18.0684 30.2591 17.7902 30.2591 17.5001C30.2591 17.2101 30.1439 16.9318 29.9387 16.7268L29.1654 17.5001ZM24.1054 10.8934C23.6782 10.4663 22.9858 10.4663 22.5587 10.8934C22.1315 11.3205 22.1315 12.0131 22.5587 12.4402L24.1054 10.8934ZM12.4388 12.4402C12.8659 12.0131 12.8659 11.3205 12.4388 10.8934C12.0116 10.4663 11.3191 10.4663 10.892 10.8934L12.4388 12.4402ZM5.83203 17.5001L5.05863 16.7268C4.85352 16.9318 4.73828 17.2101 4.73828 17.5001C4.73828 17.7902 4.85352 18.0684 5.05863 18.2735L5.83203 17.5001ZM10.892 24.1068C11.3191 24.534 12.0116 24.534 12.4388 24.1068C12.8659 23.6797 12.8659 22.9872 12.4388 22.5601L10.892 24.1068ZM13.5304 27.408C13.3644 27.9887 13.7007 28.5941 14.2816 28.7601C14.8623 28.926 15.4677 28.5897 15.6336 28.0089L13.5304 27.408ZM21.467 7.59226C21.6329 7.01144 21.2966 6.40607 20.7158 6.24012C20.1351 6.07416 19.5297 6.41049 19.3638 6.99131L21.467 7.59226ZM24.1054 24.1068L29.9387 18.2735L28.392 16.7268L22.5587 22.5601L24.1054 24.1068ZM29.9387 16.7268L24.1054 10.8934L22.5587 12.4402L28.392 18.2735L29.9387 16.7268ZM10.892 10.8934L5.05863 16.7268L6.60543 18.2735L12.4388 12.4402L10.892 10.8934ZM5.05863 18.2735L10.892 24.1068L12.4388 22.5601L6.60543 16.7268L5.05863 18.2735ZM15.6336 28.0089L21.467 7.59226L19.3638 6.99131L13.5304 27.408L15.6336 28.0089Z" fill="currentColor"></path>
</svg>`;
const serviceIcon2 = `<svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.99982 16.6666C7.03588 17.5593 6.0539 18.0056 5.66258 18.5624C5.05648 19.4249 5.05648 20.5749 5.66258 21.4374C6.0539 21.9943 7.03588 22.4406 8.99982 23.3333M8.99982 16.6666C7.03588 15.7739 6.0539 15.3276 5.66258 14.7707C5.05648 13.9083 5.05648 12.7583 5.66258 11.8958C6.0539 11.339 7.03588 10.8926 8.99982 9.99994L18.1376 5.84636C18.951 5.47673 19.3575 5.29189 19.7868 5.25519C19.9285 5.24306 20.0711 5.24306 20.2128 5.25519C20.6421 5.29189 21.0486 5.47673 21.862 5.84636L30.9998 9.99994C32.9638 10.8926 33.9457 11.339 34.337 11.8958C34.9432 12.7583 34.9432 13.9083 34.337 14.7707C33.9457 15.3276 32.9638 15.7739 30.9998 16.6666M8.99982 16.6666L18.1376 20.8203C18.951 21.1898 19.3575 21.3746 19.7868 21.4114C19.9285 21.4234 20.0711 21.4234 20.2128 21.4114C20.6421 21.3746 21.0486 21.1898 21.862 20.8203L30.9998 16.6666M8.99982 23.3333C7.03588 24.2259 6.0539 24.6723 5.66258 25.2291C5.05648 26.0916 5.05648 27.2416 5.66258 28.1041C6.0539 28.6609 7.03588 29.1073 8.99982 29.9999L18.1376 34.1536C18.951 34.5231 19.3575 34.7079 19.7868 34.7448C19.9285 34.7568 20.0711 34.7568 20.2128 34.7448C20.6421 34.7079 21.0486 34.5231 21.862 34.1536L30.9998 29.9999C32.9638 29.1073 33.9457 28.6609 34.337 28.1041C34.9432 27.2416 34.9432 26.0916 34.337 25.2291C33.9457 24.6723 32.9638 24.2259 30.9998 23.3333M8.99982 23.3333L18.1376 27.4869C18.951 27.8564 19.3575 28.0413 19.7868 28.0781C19.9285 28.0901 20.0711 28.0901 20.2128 28.0781C20.6421 28.0413 21.0486 27.8564 21.862 27.4869L30.9998 23.3333M30.9998 16.6666C32.9638 17.5593 33.9457 18.0056 34.337 18.5624C34.9432 19.4249 34.9432 20.5749 34.337 21.4374C33.9457 21.9943 32.9638 22.4406 30.9998 23.3333" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"></path>
						</svg>`;
const serviceIcon3 = `<svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.9076 8.95361L11.4613 10.3868C10.8209 10.5554 10.5007 10.6396 10.2575 10.8362C10.1776 10.9008 10.1047 10.9737 10.0401 11.0536C9.84355 11.2968 9.75929 11.617 9.59077 12.2574L6.51585 23.9421C5.73018 26.9276 5.33735 28.4204 5.95407 29.3682C6.14829 29.6667 6.40282 29.9212 6.7013 30.1154C7.64911 30.7322 9.14189 30.3393 12.1274 29.5536L23.8121 26.4787C24.4525 26.3102 24.7727 26.2259 25.0159 26.0294C25.0958 25.9648 25.1687 25.8919 25.2333 25.812C25.4299 25.5688 25.5141 25.2486 25.6827 24.6082L27.1159 19.1619M16.9076 8.95361L27.1159 19.1619M16.9076 8.95361L19.4264 6.43477C20.1997 5.66143 20.5864 5.27475 21.0544 5.20063C21.2056 5.17669 21.3595 5.17669 21.5107 5.20063C21.9787 5.27475 22.3654 5.66143 23.1387 6.43477L29.6347 12.9308C30.4081 13.7041 30.7947 14.0908 30.8689 14.5588C30.8928 14.71 30.8928 14.8639 30.8689 15.0151C30.7947 15.4831 30.4081 15.8698 29.6347 16.6431L27.1159 19.1619" stroke="currentColor" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M14.9023 21.1742C13.8452 20.1171 13.8452 18.4032 14.9023 17.3461C15.9595 16.2889 17.6734 16.2889 18.7305 17.3461C19.7876 18.4032 19.7876 20.1171 18.7305 21.1742C17.6734 22.2313 15.9595 22.2313 14.9023 21.1742ZM14.9023 21.1742L11.0742 25.0023" stroke="currentColor" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>`;
const serviceIcon4 = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 5V8.33333M20 5C15.8579 5 12.1079 6.67893 9.3934 9.3934M20 5C24.1418 5 27.8917 6.67875 30.6062 9.39295M9.3934 9.3934C6.67893 12.1079 5 15.8579 5 20M9.3934 9.3934L11.7488 11.7488M30.6062 9.39295C33.3208 12.1074 35 15.8576 35 20M30.6062 9.39295L28.2492 11.75M5 20H8.33333M5 20C5 24.1418 6.67875 27.8917 9.39295 30.6062M9.39295 30.6062C12.1074 33.3208 15.8576 35 20 35M9.39295 30.6062L11.75 28.2492M35 20H31.6667M35 20C35 24.1422 33.321 27.8922 30.6067 30.6067M30.6067 30.6067C27.8922 33.321 24.1422 35 20 35M30.6067 30.6067L28.248 28.248M20 35V31.6667M19.9993 17.5C21.38 17.5 22.5 18.6193 22.5 20C22.5 21.3807 21.3807 22.5 20 22.5C18.6193 22.5 17.5 21.3803 17.5 19.9997C17.5 18.6193 18.619 17.5 19.9993 17.5ZM19.9993 17.5V12.9167" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>`;

const serviceIcon5 = `<svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.79167 24.1979V24.1979C6.64783 24.1979 5.5866 23.5194 5.2982 22.4125C5.02201 21.3525 4.875 20.2403 4.875 19.0938C4.875 11.845 10.7513 5.96875 18 5.96875C25.2487 5.96875 31.125 11.845 31.125 19.0938C31.125 20.2403 30.978 21.3525 30.7018 22.4125C30.4134 23.5194 29.3522 24.1979 28.2083 24.1979V24.1979M25.2917 30.0313V30.0313C26.9025 30.0313 28.2083 28.7254 28.2083 27.1146V21.2813C28.2083 19.6704 26.9025 18.3646 25.2917 18.3646V18.3646C23.6808 18.3646 22.375 19.6704 22.375 21.2813V27.1146C22.375 28.7254 23.6808 30.0313 25.2917 30.0313ZM10.7083 30.0313V30.0313C12.3192 30.0313 13.625 28.7254 13.625 27.1146V21.2813C13.625 19.6704 12.3192 18.3646 10.7083 18.3646V18.3646C9.0975 18.3646 7.79167 19.6704 7.79167 21.2813V27.1146C7.79167 28.7254 9.0975 30.0313 10.7083 30.0313Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>`;
export const softwareLogo: ClientLogo[] = [
  {
    gray: 'assets/images/client/logo-gray/01.svg',
    light: 'assets/images/client/logo-light/01.svg',
    dark: 'assets/images/client/logo-dark/01.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/02.svg',
    light: 'assets/images/client/logo-light/02.svg',
    dark: 'assets/images/client/logo-dark/02.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/03.svg',
    light: 'assets/images/client/logo-light/03.svg',
    dark: 'assets/images/client/logo-dark/03.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/04.svg',
    light: 'assets/images/client/logo-light/04.svg',
    dark: 'assets/images/client/logo-dark/04.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/05.svg',
    light: 'assets/images/client/logo-light/05.svg',
    dark: 'assets/images/client/logo-dark/05.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/06.svg',
    light: 'assets/images/client/logo-light/06.svg',
    dark: 'assets/images/client/logo-dark/06.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/07.svg',
    light: 'assets/images/client/logo-light/07.svg',
    dark: 'assets/images/client/logo-dark/07.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/08.svg',
    light: 'assets/images/client/logo-light/08.svg',
    dark: 'assets/images/client/logo-dark/08.svg',
  },
  {
    gray: 'assets/images/client/logo-gray/09.svg',
    light: 'assets/images/client/logo-light/09.svg',
    dark: 'assets/images/client/logo-dark/09.svg',
  },
];

export const serviceData: serviceType[] = [
  {
    title: 'Software development',
    description: 'Transform your unique ideas into reality with our services.',
    link: 'service-single',
    icon: serviceIcon,
    color: 'pink',
  },
  {
    title: 'Consultancy & Strategy',
    description: 'Our experienced consultants work closely with you to assess.',
    link: 'service-single',
    icon: serviceIcon2,
    color: 'purple',
  },
  {
    title: 'UX/UI design',
    description:
      'Talented designers combine creativity with user-centric design.',
    link: 'service-single',
    icon: serviceIcon3,
    color: 'warning',
  },
  {
    title: 'Quality assurance',
    description:
      'From functional testing to performance testing, our meticulous.',
    link: 'service-single',
    icon: serviceIcon4,
    color: 'primary',
  },
  {
    title: 'Maintenance & Support',
    description: 'Keep your software running smoothly with our maintenance.',
    link: 'service-single',
    icon: serviceIcon5,
    color: 'success',
  },
];

export const testimonial: testimonials[] = [
  {
    rating: 4.5,
    text: 'Their team went above and beyond to understand our needs and deliver a solution that exceeded our expectations. They demonstrated throughout the process was truly impressive.',
    avatar: 'assets/images/avatar/09.jpg',
    name: 'Jacqueline Miller',
    position: 'Product designer',
  },
  {
    rating: 5,
    text: 'Frequently partiality possession resolution at or appearance unaffected me. Ye goodness felicity do disposal dwelling no.',
    avatar: 'assets/images/avatar/10.jpg',
    name: 'Louis Ferguson',
    position: 'Web Developer',
  },
  {
    rating: 4.5,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    avatar: 'assets/images/avatar/04.jpg',
    name: 'Emma Watson',
    position: 'UI/UX designer',
  },
  {
    rating: 4.5,
    text: "Our passion for customer excellence is just one reason why we are the market leader. We've always worked very hard to give our customers the best experience.",
    avatar: 'assets/images/avatar/07.jpg',
    name: 'Allen Smith',
    position: 'Manager',
  },
  {
    rating: 4.5,
    text: 'Was out laughter raptures returned outweigh. Luckily cheered colonel I do we attack highest enabled. Tried law yet style child. The bore of true of no be deal.',
    avatar: 'assets/images/avatar/01.jpg',
    name: 'Emma Watson',
    position: 'UI/UX designer',
  },
];

export const avatars: avatar[] = [
  { src: 'assets/images/avatar/02.jpg', alt: 'avatar 02' },
  { src: 'assets/images/avatar/05.jpg', alt: 'avatar 05' },
  { src: 'assets/images/avatar/10.jpg', alt: 'avatar 10' },
  { src: 'assets/images/avatar/09.jpg', alt: 'avatar 09' },
];

export const aboutsData: string[] = [
  'Collaborative approach',
  'Agile development methodology',
  'Data security and compliance',
];

export const pricingPlans :PricingPlan[] = [
  {
    name: "Basic plan",
    price: 25,
    billingCycle: "month",
    popular: false,
    icon: "assets/images/elements/rocket.png",
    currency: "$",
    features: [
      "Customizable features",
      "Basic support",
      "Monthly updates",
      "Up to 50 Users"
    ],
    button: {
      label: "Get started",
      link: "/contact-v2",
      style: "btn-dark"
    },
    cardStyle: {
      bg: "bg-body",
      text: "text-center",
      extra: "align-items-center p-4 pe-5 me-md-n3"
    }
  },
  {
    name: "Standard plan",
    price: 120,
    billingCycle: "month",
    popular: true,
    icon: "assets/images/elements/thunder.png",
    currency: "$",
    features: [
      "All basic plan features",
      "Priority support",
      "Access to advanced features",
      "Up to 100 Users",
      "Dedicated account manager"
    ],
    button: {
      label: "Get started",
      link: "/contact-v2",
      style: "btn-white"
    },
    cardStyle: {
      bg: "bg-primary",
      text: "text-center",
      extra: "align-items-center p-4 pt-5"
    }
  }
];


export const faqsData :faqData[] = [
  {
    id: 1,
    title: "How do I get started with your service?",
    description:
      "The first step is to sign up for our service. You can do this by visiting our website and locating the sign-up or registration button. Click on it and follow the prompts to create your account."
  },
  {
    id: 2,
    title: "What payment methods do you accept?",
    description:
      "September how men saw tolerably two behavior arranging. She offices for highest and replied one venture pasture. Applauded no discovery in newspaper allowance am northward. Frequently partiality possession resolution at or appearance unaffected me. Engaged its was the evident pleased husband. Ye goodness felicity do disposal dwelling no. First am plate jokes to began to cause a scale."
  },
  {
    id: 3,
    title: "How can I contact your customer support team?",
    description:
      "Agencies provide a wide range of services depending on their specialization. Some common services include advertising campaigns, digital marketing, branding, creative design, media planning and buying, public relations, talent management, event planning, and market research."
  },
  {
    id: 4,
    title: "Do you offer custom solutions for businesses?",
    description:
      "When selecting an agency, consider your specific requirements, budget, and the agency's expertise and track record in your industry. Research their portfolio, client testimonials, and case studies to gauge their capabilities. It's also important to meet with the agency to assess their communication style and ensure they align with your goals."
  }
];
