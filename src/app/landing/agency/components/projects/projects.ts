import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { projects } from '../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'agency-projects',
  standalone: true,
  imports: [SwiperDirective,RouterLink],
  templateUrl: './projects.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Projects {
  projects = projects;

  swiperConfig: SwiperOptions = {
    "spaceBetween": 50,
    "loop": true,
    "autoplay": false,
    "navigation": {
      "nextEl": ".swiper-button-next-project",
      "prevEl": ".swiper-button-prev-project"
    },
    "breakpoints": {
      "576": { "slidesPerView": 1 },
      "768": { "slidesPerView": 3 },
      "992": { "slidesPerView": 3 },
      "1200": { "slidesPerView": 4 }
    }
  }
}
