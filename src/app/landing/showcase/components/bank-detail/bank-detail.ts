import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { stepsData } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { register } from 'swiper/element';
import { RouterLink } from '@angular/router';
register()

@Component({
  selector: 'showcase-bank-detail',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './bank-detail.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BankDetail {
  steps = stepsData;
  allsteps= stepsData

  swiperConfig: SwiperOptions = {
    "spaceBetween": 30,
    "effect": "fade",
    "autoplay": false,
    "simulateTouch": false,
    "navigation": {
      "nextEl": "#swiper-button-next-steps",
      "prevEl": "#swiper-button-prev-steps"
    }
  }

  swiperOptionConfig: SwiperOptions = {
    "spaceBetween": 30,
    "effect": "fade",
    "autoplay": false,
    "simulateTouch": false,
    "navigation": {
      "nextEl": "#swiper-button-next-steps",
      "prevEl": "#swiper-button-prev-steps"
      }  }
  
}
