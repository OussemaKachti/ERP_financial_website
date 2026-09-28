interface team {
     name: string;
    role: string;
    avatar: string;
    social_links: {
        platform: string;
        url: any[];
    }[];
}

export const team = [
  {
    name: 'Emma Watson',
    role: 'Founder',
    avatar: 'assets/images/team/3by4/03.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'LinkedIn', url: [] },
    ],
  },
  {
    name: 'Allen Smith',
    role: 'Co-Founder',
    avatar: 'assets/images/team/3by4/02.jpg',
    social_links: [
      { platform: 'Facebook', url: [] },
      { platform: 'Instagram', url: [] },
      { platform: 'LinkedIn', url: [] },
    ],
  },
  {
    name: 'Louis Ferguson',
    role: 'Creative Director',
    avatar: 'assets/images/team/3by4/04.jpg',
    social_links: [
      { platform: 'Facebook', url: [] },
      { platform: 'LinkedIn', url: [] },
    ],
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Strategist',
    avatar: 'assets/images/team/3by4/06.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'LinkedIn', url: [] },
      { platform: 'Twitter', url: [] },
    ],
  },
  {
    name: 'Michael Brown',
    role: 'Lead Developer',
    avatar: 'assets/images/team/3by4/01.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'Twitter', url: [] },
    ],
  },
  {
    name: 'Sarah Davis',
    role: 'Content Specialist',
    avatar: 'assets/images/team/3by4/08.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'Facebook', url: [] },
    ],
  },
  {
    name: 'Samuel Bishop',
    role: 'Product designer',
    avatar: 'assets/images/team/3by4/05.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'Facebook', url: [] },
    ],
  },
  {
    name: 'Alex Green',
    role: 'Account Manager',
    avatar: 'assets/images/team/3by4/07.jpg',
    social_links: [
      { platform: 'Instagram', url: [] },
      { platform: 'Twitter', url: [] },
      { platform: 'Facebook', url: [] },
    ],
  },
];
