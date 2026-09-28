import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
interface footerSection {
  title?: string;
  description?: string;
  links?: {
    label: string;
    link: string | [];
    badge?: {
      text: string;
      color: string;
    };
    external?: boolean;
  }[];
  apps?: {
    img: string;
    alt: string;
    link: string | [];
  }[];
  socialTitle?: string;
  socials?: {
    icon: string;
    color: string;
    link: string | [];
  }[];
}
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Footer {
  currentYear: number = new Date().getFullYear();
    footerSections:footerSection[] = [
    {
      title: 'Company',
      links: [
        { label: 'About us', link: '/about-v1' },
        { label: 'Contact us', link: '/contact-us' },
        {
          label: 'Career',
          link: '/career',
          badge: { text: '2 jobs', color: 'primary' },
        },
        { label: 'Career detail', link: '/career-single' },
        { label: 'Become a partner', link: '/contact-v2' },
        { label: 'Services', link: '/service-single' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case studies', link: '/portfolio-case-study-v1' },
        {
          label: 'Pricing',
          link: '/pricing-v1',
          badge: { text: 'New', color: 'success' },
        },
        { label: 'Blogs', link: '/blog-minimal' },
        { label: 'Blog detail', link: '/blog-single' },
        { label: 'Success stories',link: '/home-product', external: true },
      ],
    },
    {
      title: 'Download our app',
      description: 'Get instant access to exclusive features for FREE!',
      apps: [
        {
          img: 'assets/images/elements/google-play.svg',
          alt: 'google-play',
          link: [],
        },
        {
          img: 'assets/images/elements/app-store.svg',
          alt: 'app-store',
          link: [],
        },
      ],
      socialTitle: 'Follow on:',
      socials: [
        { icon: 'facebook', color: 'facebook', link: [] },
        { icon: 'instagram', color: 'instagram', link: [] },
        { icon: 'twitter-x', color: 'twitter-x', link: [] },
        { icon: 'linkedin', color: 'linkedin', link: [] },
      ],
    },
  ];
}
