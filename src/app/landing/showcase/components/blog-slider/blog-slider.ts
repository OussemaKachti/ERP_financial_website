import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { blogs } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'showcase-blog-slider',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './blog-slider.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogSlider {
  blogs = blogs;

  swiperConfig: SwiperOptions = {
   "spaceBetween": 50,
    "loop": true,
    "autoplay": false,
    "navigation": {
    "nextEl": ".swiper-button-next",
    "prevEl": ".swiper-button-prev"
    },
    "breakpoints": { 
    "576": {"slidesPerView": 1},
    "768": {"slidesPerView": 2},
    "992": {"slidesPerView": 3}
    }
  }
}
