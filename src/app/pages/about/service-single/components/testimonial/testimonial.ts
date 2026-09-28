import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { testimonial } from '../data';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-single-testimonial',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonial {
  testimonial = testimonial;

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
    navigation: {
      nextEl: '#swiper-button-next',
      prevEl: '#swiper-button-prev',
    },
  };
}
