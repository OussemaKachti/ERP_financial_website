import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import {  NgxTypedJsModule } from 'ngx-typed-js';
import { demos, features, landing } from './data';
import { SwiperDirective } from '../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [NgxTypedJsModule, SwiperDirective, RouterLink],
  templateUrl: './demo.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Demo {
  demos = demos;
  landing = landing;
  features =features;

  swiperConfig: SwiperOptions = {
    spaceBetween: 50,
    loop: true,
    speed: 7000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 2 },
      '768': { slidesPerView: 3 },
      '992': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
      '1300': { slidesPerView: 5 },
    },
  };
}
