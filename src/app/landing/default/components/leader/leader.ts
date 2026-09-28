import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { clientLogos } from '../../data';

register();

@Component({
  selector: 'app-leader',
  standalone: true,
  templateUrl: './leader.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Leader implements AfterViewInit {
  clientLogo = clientLogos;

  swiperConfig = {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true, 
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  };

  @ViewChild('swiperEl', { static: true }) swiperEl!: ElementRef;

  ngAfterViewInit() {
    Object.assign(this.swiperEl.nativeElement, this.swiperConfig);
    this.swiperEl.nativeElement.initialize();
  }
}
