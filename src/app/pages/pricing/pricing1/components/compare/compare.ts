import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { clientLogo, pricingTable } from '../data';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pricing1-compare',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './compare.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Compare {
  clientLogo = clientLogo;

  pricingTable = pricingTable;
  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    autoplay: true,
    breakpoints: {
      '576': { slidesPerView: 3 },
      '768': { slidesPerView: 4 },
      '1200': { slidesPerView: 5 },
    },
  };
}
