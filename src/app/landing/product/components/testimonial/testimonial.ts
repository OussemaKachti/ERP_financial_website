import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { testimonials } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-testimonial',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonial {
  testimonial = testimonials

  swiperTesti: SwiperOptions = {
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }
}        
