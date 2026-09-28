


import { Component, ChangeDetectionStrategy } from '@angular/core';
import { plans,Plan } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-pricing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pricing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Pricing {
  plans = plans;
   isAnnual = false;

  togglePrice() {
    this.isAnnual = !this.isAnnual;
  }

  getPrice(plan: Plan) {
    return this.isAnnual ? plan.annualPrice : plan.monthlyPrice;
  }

  getPriceLabel() {
    return this.isAnnual ? 'year' : 'month';
  }

}




