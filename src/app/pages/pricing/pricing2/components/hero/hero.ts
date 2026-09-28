import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pricingPlans } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pricing2-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
  pricingPlans= pricingPlans
}
