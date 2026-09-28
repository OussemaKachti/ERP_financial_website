import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HorizontalMenu } from '../../../components/app-menu/components/horizontal-menu/horizontal-menu';
import { RouterLink } from '@angular/router';
import { Footer1 } from '../../conatctus/components/footer1/footer1';

@Component({
  selector: 'app-portfolio-modern',
  standalone: true,
  imports: [HorizontalMenu, RouterLink, Footer1],
  templateUrl: './portfolio-modern.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class PortfolioModern {
  modern = [
    {
      title: 'Media mastery',
      category: 'SEO',
      description: 'Media mastery',
      image: 'assets/images/portfolio/3by4/06.jpg',
      link: 'portfolio-case-study-v2',
      year: 2023,
    },
    {
      title: 'Brand Identity Development',
      category: 'Logo design',
      description: 'Brand Identity Development',
      image: 'assets/images/portfolio/03.jpg',
      link: 'portfolio-case-study-v1',
      year: 2022,
    },
    {
      title: 'ShopSmart',
      category: 'E-commerce',
      description: 'ShopSmart',
      image: 'assets/images/portfolio/3by4/08.jpg',
      link: 'portfolio-case-study-v2',
      year: 2023,
    },
    {
      title: 'TechWave',
      category: 'Animation',
      description: 'TechWave',
      image: 'assets/images/portfolio/4by4/03.jpg',
      link: 'portfolio-case-study-v1',
      year: 2022,
    },
    {
      title: 'Digital marketing overhaul',
      category: 'Marketing',
      description: 'Digital marketing overhaul',
      image: 'assets/images/portfolio/04.jpg',
      link: 'portfolio-case-study-v2',
      year: 2021,
    },
  ];
}
