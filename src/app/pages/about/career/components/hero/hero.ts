import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { heroImage, sellingPoint } from '../data';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'career-hero',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  sellingPoint = sellingPoint;
  heroImage=heroImage;                                

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 40,
    loop:true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next-points',
      prevEl: '.swiper-button-prev-points',
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 4 },
      '1400': { slidesPerView: 5 },
    },
  };
}
