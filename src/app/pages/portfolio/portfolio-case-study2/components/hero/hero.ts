import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JarallaxDirective } from '../../../../../components/jarallax-directive';
import { StickyThingDirective } from '../../../../../shared/directives/sticky-thing.directive';
import { RouterLink } from '@angular/router';
import { CountUpDirective } from 'ngx-countup';

interface Paragraph {
  text: string;
  dropcap?: string;
}

interface Section {
  id: string;
  title: string;
  paragraphs: Paragraph[];
  tags: string[];
  points: string[];
}

interface ProjectInfo {
  label: string;
  value: string;
  isButton?: boolean;
  buttonText?: string;
  buttonLink?: any[];
}

interface counterData {
  prefix: string;
  count: number;
  suffix: string;
  color: string;
  text: string;
}

@Component({
  selector: 'case-study2-hero',
  standalone: true,
  imports: [
    JarallaxDirective,
    StickyThingDirective,
    RouterLink,
    CountUpDirective,
  ],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Hero {
  sections: Section[] = [
    {
      id: '01',
      title: 'Overview',
      paragraphs: [
        {
          text: 'Design a clean, intuitive interface that provides an exceptional user experience. Ensure ease of navigation and accessibility for all users, including those with disabilities. Implement a robust set of features including secure payment gateways, real-time push notifications, and comprehensive user analytics. Incorporate a seamless shopping experience with a well-structured product catalog and efficient checkout process.',
        },
      ],
      tags: ['Branding', 'Packaging', 'UI/UX design'],
      points: [],
    },
    {
      id: '02',
      title: 'The Challenge',
      paragraphs: [
        {
          dropcap: 'I',
          text: `ntegrating multiple third-party services, such as payment gateways, social media logins, and user analytics tools, presented a significant challenge. Ensuring these integrations worked harmoniously without compromising the app's performance was crucial. Additionally, securing user data and privacy, particularly during transactions, required robust encryption and compliance with data protection regulations to build user trust.

`,
        },
        {
          text: `Delivering the project within a stringent timeline necessitated meticulous planning and efficient execution. Coordinating among different teams, managing resources effectively, and adhering to the project schedule were vital to meeting the deadline without compromising on quality.`,
        },
      ],
      tags: [],
      points: [
        'Integrating multiple third-party services seamlessly.',
        'Ensuring robust security and privacy for user data.',
        'Meeting strict project deadlines while maintaining quality.',
        'Providing a consistent user experience across all devices and platforms.',
        'Designing for scalability to handle increased user traffic and data.',
      ],
    },
  ];

  projectInfo: ProjectInfo[] = [
    { label: 'Client', value: 'Webestica Agency' },
    { label: 'Category', value: 'UI/UX design' },
    { label: 'Location', value: '489 Depot Road Midland' },
    { label: 'Time spent', value: '2023, 4 months' },
    {
      label: 'View project',
      value: '',
      isButton: true,
      buttonText: 'View project',
      buttonLink: [],
    },
  ];

  countersData: counterData[] = [
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
      color: 'text-primary',
      text: 'View this project got across our social media network',
    },
    {
      prefix: '$',
      count: 12.8,
      suffix: 'M',
      color: 'text-primary',
      text: 'Total raised in funding so far',
    },
  ];
}
