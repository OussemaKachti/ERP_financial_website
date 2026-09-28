import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { platformRatings, testimonials } from '../../data';
import { SwiperDirective } from '../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element';
register()
@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './testimonial.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Testimonial {
  platformRatings = platformRatings;
  testimonials = testimonials;

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: "#swiper-pagination",
      clickable: true
    }
  }
}
