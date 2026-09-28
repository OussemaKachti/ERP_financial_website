import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface footersData {
  logo: {
    path: string;
    img: string;
    description: string;
  };
  socialLinks: {
    icon: string;
    path: any[];
  }[];
  sections: {
    title: string;
    links: {
      name: string;
      path: string | any[];
      badge?: { text: string; class: string };
      icon?: string;
    }[];
  }[];
};

@Component({
  selector: 'app-footer2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Footer2 {
  currentYear: number = new Date().getFullYear();

  footerData :footersData = {
    logo: {
      path: '/index',
      img: 'assets/images/logo-light.svg',
      description:
        "A Bootstrap theme that's both stylish and functional, perfect for any type of technology or corporate website.",
    },
    socialLinks: [
      { icon: 'bi bi-facebook', path: [] },
      { icon: 'bi bi-instagram', path: [] },
      { icon: 'bi bi-twitter-x', path: [] },
      { icon: 'bi bi-linkedin', path: [] },
    ],
    sections: [
      {
        title: 'Company',
        links: [
          { name: 'About us', path: '/about-v1' },
          { name: 'Contact us', path: '/contact-us' },
          {
            name: 'Career',
            path: '/career',
            badge: { text: '2 jobs', class: 'bg-primary' },
          },
          { name: 'Career detail', path: '/career-single' },
          { name: 'Become a partner', path: '/contact-v2' },
          { name: 'Services', path: [] },
        ],
      },
      {
        title: 'Resources',
        links: [
          { name: 'Case studies', path: '/portfolio-case-study-v1' },
          {
            name: 'Pricing',
            path: '/pricing-v1',
            badge: { text: 'New', class: 'bg-success' },
          },
          { name: 'Blogs', path: '/blog-minimal' },
          { name: 'Blog detail', path: '/blog-single' },
          {
            name: 'Success stories',
            path:'/home-product',
            icon: 'bi bi-box-arrow-up-right',
          },
        ],
      },
    ],
  };
}
