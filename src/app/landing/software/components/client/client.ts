import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { softwareLogo } from '../../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'software-client',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './client.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Client {
  softwareLogo = softwareLogo;

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
      '1200': { slidesPerView: 6 },
      '1400': { slidesPerView: 8 },
    },
  };
}
