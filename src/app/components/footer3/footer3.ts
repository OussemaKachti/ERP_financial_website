import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FootersData {
  type: 'logo' | 'links' | 'newsletter';

  logoLight?: string;
  logoDark?: string;
  description?: string;
  contacts?: {
    icon: string;
    text: string;
    link: string;
  }[];

  title?: string;
  items?: {
    label: string;
    href: string | string[];
    badge?: {
      text: string;
      class: string;
    };
    external?: boolean;
  }[];
  note?: string;
  socials?: {
    icon: string;
    class: string;
    href: string | string[];
  }[];
}
@Component({
  selector: 'app-footer3',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer3.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Footer3 {
 currentYear: number = new Date().getFullYear();
  footerData: FootersData[] = [
  {
    type: 'logo',
    logoLight: 'assets/images/logo.svg',
    logoDark: 'assets/images/logo-light.svg',
    description:
      "A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.",
    contacts: [
      {
        icon: 'bi bi-headset',
        text: '(251) 854-6308',
        link: 'tel:+12518546308',
      },
      {
        icon: 'bi bi-envelope',
        text: 'example@gmail.com',
        link: 'mailto:example@gmail.com',
      },
    ],
  },
  {
    type: 'links',
    title: 'Company',
    items: [
      { label: 'About us', href: '/about-v1' },
      { label: 'Contact us', href: '/contact-us' },
      {
        label: 'Career',
        href: '/career',
        badge: { text: '2 jobs', class: 'bg-primary' },
      },
      { label: 'Career detail', href: '/career-single' },
      { label: 'Become a partner', href: '/contact-v2' },
      { label: 'Services', href: '/service-single' },
    ],
  },
  {
    type: 'links',
    title: 'Resources',
    items: [
      { label: 'Case studies', href: '/portfolio-case-study-v1' },
      {
        label: 'Pricing',
        href: '/pricing-v1',
        badge: { text: 'New', class: 'bg-success' },
      },
      { label: 'Blogs', href: '/blog-minimal' },
      { label: 'Blog detail', href: '/blog-single' },
      { label: 'Success stories', href: '/home-product', external: true },
    ],
  },
  {
    type: 'newsletter',
    title: 'Stay connected with us',
    note: '✌️ No Spam — We Promise!',
    socials: [
      { icon: 'bi bi-facebook', class: 'bg-facebook', href: [] },
      { icon: 'bi bi-instagram', class: 'bg-instagram', href: [] },
      { icon: 'bi bi-twitter-x', class: 'bg-twitter-x', href: [] },
      { icon: 'bi bi-linkedin', class: 'bg-linkedin', href: [] },
    ],
  },
];

}
