import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'portfolio-grid-portfolio',
  standalone: true,
  imports: [RouterLink, NgbPaginationModule],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Portfolio {
page=1;

  private allPortfolio = [
    {
      title: 'Design blast',
      category: 'UI/UX design',
      image: 'assets/images/portfolio/3by4/01.jpg',
      link: '/portfolio-case-study-v1',
    },
    {
      title: 'Media mastery',
      category: 'SEO',
      image: 'assets/images/portfolio/3by4/09.jpg',
      link: '/portfolio-case-study-v1',
    },
    {
      title: 'Brand revamp',
      category: 'Logo design',
      image: 'assets/images/portfolio/3by4/03.jpg',
      link: '/portfolio-case-study-v1',
    },
    {
      title: 'ShopSmart',
      category: 'Packaging',
      image: 'assets/images/portfolio/3by4/04.jpg',
      link: '/portfolio-case-study-v2',
    },
    {
      title: 'Surge Tech',
      category: 'UI/UX design',
      image: 'assets/images/portfolio/3by4/05.jpg',
      link: '/portfolio-case-study-v2',
    },
    {
      title: 'App Innovation',
      category: 'Development',
      image: 'assets/images/portfolio/3by4/07.jpg',
      link: '/portfolio-case-study-v2',
    },
    {
      title: 'Momentum',
      category: 'Logo design',
      image: 'assets/images/portfolio/3by4/02.jpg',
      link: '/portfolio-case-study-v1',
    },
    {
      title: 'TechWave',
      category: 'Animation',
      image: 'assets/images/portfolio/3by4/06.jpg',
      link: '/portfolio-case-study-v2',
    },
    {
      title: 'Cropo stone',
      category: 'Packaging',
      image: 'assets/images/portfolio/3by4/08.jpg',
      link: '/portfolio-case-study-v1',
    },
  ];

  portfolio = [...this.allPortfolio];

  filterIntegrations(category: string) {
    if (category === 'All') {
      this.portfolio = [...this.allPortfolio];
    } else {
      this.portfolio = this.allPortfolio.filter(
        (item) => item.category === category
      );
    }
  }
}
