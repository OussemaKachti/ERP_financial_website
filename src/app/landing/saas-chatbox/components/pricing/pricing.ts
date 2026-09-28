import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from "../../../../components/swiper-directive";
import { pricingPlans, testimonials } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-chatbox-pricing',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './pricing.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Pricing {
  testimonials = testimonials
  pricingPlans= pricingPlans
  swiperConfig: SwiperOptions = {
    "spaceBetween": 30,
    "autoplay": {
      "delay": 4000,
      "disableOnInteraction": false,
      "pauseOnMouseEnter": true
    },
    "pagination": {
      "el": ".swiper-pagination"
    }
  }
}
