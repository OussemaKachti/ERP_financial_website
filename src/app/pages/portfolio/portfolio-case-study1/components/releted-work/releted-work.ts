import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { slides } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'case-study1-releted-work',
  standalone: true,
  imports: [SwiperDirective, RouterLink],
  templateUrl: './releted-work.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReletedWork {
  slides = slides;

  workSwiper: SwiperOptions = {
    loop: false,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '1200': { slidesPerView: 3 },
    },
  };
}
