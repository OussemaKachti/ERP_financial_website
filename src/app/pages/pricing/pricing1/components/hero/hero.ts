import { Component, ChangeDetectionStrategy } from '@angular/core';
import { pricingPlan } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pricing1-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
  pricingPlan = pricingPlan
  // currentPrice: string = this.monthlyPrice;
  isAnnual: boolean = false;

  onTogglePrice(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isAnnual = inputElement.checked;
    }
    
    getPrice(plan: any): string {
    return this.isAnnual ? plan.annualPrice : plan.monthlyPrice;
    }
    
}
