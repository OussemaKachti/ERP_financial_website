import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { highlightData } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { SafePipe } from '../../../../components/safe.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-highlight',
  standalone: true,
  imports: [SwiperDirective, SafePipe, RouterLink],
  templateUrl: './highlight.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Highlight {
  highlight = highlightData;

  swiperConfig: SwiperOptions = {
    spaceBetween: 50,
    loop: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next-blog',
      prevEl: '.swiper-button-prev-blog',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  };
}
