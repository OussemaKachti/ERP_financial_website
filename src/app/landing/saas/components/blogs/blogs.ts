import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { blogData } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-blogs',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './blogs.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blogs {
  data = blogData;

  swiperBlog: SwiperOptions={
  "spaceBetween": 50,
    "loop": true,
      "breakpoints": {
    "576": { "slidesPerView": 1 },
    "768": { "slidesPerView": 2 },
    "1200": { "slidesPerView": 2 }
  },
  "navigation": {
    "nextEl": ".swiper-button-next",
      "prevEl": ".swiper-button-prev"
  }
}
}
