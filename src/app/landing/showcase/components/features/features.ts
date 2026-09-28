import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element';
import { RouterLink } from '@angular/router';
register()
@Component({
  selector: 'showcase-features',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './features.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Features {

  "title"="Get a closer look at how our app works"
  "description"= "Browse through our gallery to get a glimpse of the intuitive design and powerful features that make managing your finances effortless."
  "images"= [
    "assets/images/mobile-app/screen/s-01.jpg",
    "assets/images/mobile-app/screen/s-02.jpg",
    "assets/images/mobile-app/screen/s-03.jpg",
    "assets/images/mobile-app/screen/s-04.jpg",
    "assets/images/mobile-app/screen/s-05.jpg",
    "assets/images/mobile-app/screen/s-06.jpg",
    "assets/images/mobile-app/screen/s-07.jpg",
    "assets/images/mobile-app/screen/s-08.jpg"
  ]

  swiperFeature: SwiperOptions = {
    "slidesPerView": 1,
    "spaceBetween": 50,
    "autoplay": {
      "delay": 2000,
      "disableOnInteraction": false,
      "pauseOnMouseEnter": true
    },
    "breakpoints": {
      "576": { "slidesPerView": 3 },
      "992": { "slidesPerView": 5 },
      "1300": { "slidesPerView": 7 }
    },
    "pagination": {
      "el": "#swiper-pagination",
    }
  }
}
