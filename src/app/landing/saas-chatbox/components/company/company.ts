import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { clientsLogo } from '../data';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '../../../../components/swiper-directive';

@Component({
  selector: 'saas-chatbox-company',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './company.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Company {
  clientsLogo = clientsLogo;

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
      '1400': { slidesPerView: 7 },
    },
  };
}
