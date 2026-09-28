import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { features } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-features',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './features.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Features {
features= features;
swiperOptions:SwiperOptions={
  spaceBetween: 50,
  loop: true,
  autoplay: {
  pauseOnMouseEnter: true
  },
  navigation: {
  nextEl: '.swiper-button-next-feature',
  prevEl: '.swiper-button-prev-feature'
  },
  breakpoints: {
  576: { slidesPerView: 2 },
  992: { slidesPerView: 3 },
  1200: { slidesPerView: 4 }
  }
  };
}
