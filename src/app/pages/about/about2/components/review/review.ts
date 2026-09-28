import { Component, ChangeDetectionStrategy } from '@angular/core';
import { reviewAbout, reviewicon } from '../data';
import { IsotopeDirective } from '../../../../../components/app-menu/components/isotope-directive ';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about2-review',
  standalone: true,
  imports: [IsotopeDirective,RouterLink],
  templateUrl: './review.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Review {
  reviewAbout = reviewAbout
  reviewicon =reviewicon
}
