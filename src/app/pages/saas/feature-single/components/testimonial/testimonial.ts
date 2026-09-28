
import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { testimonial } from '../data';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'feature-single-testimonial',
  standalone: true,
  imports: [ SwiperDirective,RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonial = testimonial;

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-testimonials',
      prevEl: '.swiper-button-prev-testimonials',
    },
  };

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return [...Array(fullStars).fill('full'), ...(halfStar ? ['half'] : [])];
  }
}
