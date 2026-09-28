import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-single-showcase',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './showcase.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Showcase {
  swiper: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
  };
}
