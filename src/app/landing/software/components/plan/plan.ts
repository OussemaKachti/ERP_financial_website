import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { pricingPlans } from '../../data';

@Component({
  selector: 'software-plan',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './plan.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Plan{
pricingPlans = pricingPlans;
}
