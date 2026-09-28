import { Component, ChangeDetectionStrategy } from '@angular/core';
import { portfolioData } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-list-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Portfolio {
  portfolioData = portfolioData
}
