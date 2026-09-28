import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { review } from '../data';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'career-review',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './review.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Review {
  review = review;

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    speed: 14000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
      '1400': { slidesPerView: 4 },
    },
  };
}
