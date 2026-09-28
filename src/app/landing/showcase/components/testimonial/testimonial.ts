import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { testimonials } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'showcase-testimonial',
  standalone: true,
  imports: [SwiperDirective, RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonials = testimonials;

  swiperTestimonial: SwiperOptions = {
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-test',
      prevEl: '.swiper-button-prev-test',
    },
  };
  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }
}
