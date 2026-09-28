import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { testimonial } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'agency-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonial {
  testimonial = testimonial;

  swiperConfig: SwiperOptions = {
    "spaceBetween": 30,
    "autoplay": {
      "delay": 4000,
      "disableOnInteraction": false,
      "pauseOnMouseEnter": true
    },
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    }
  }
}
