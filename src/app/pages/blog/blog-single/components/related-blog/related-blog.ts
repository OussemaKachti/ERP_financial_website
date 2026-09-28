import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { blogProject } from '../data';
import { SwiperDirective } from '../../../../../components/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'single-related-blog',
  standalone: true,
  imports: [SwiperDirective, RouterLink],
  templateUrl: './related-blog.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RelatedBlog {
  blogProject = blogProject;
  swiperConfig: SwiperOptions = {
    spaceBetween: 50,
    loop: true,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      '576': { slidesPerView: 1 },
      '768': { slidesPerView: 2 },
      '992': { slidesPerView: 3 },
    },
  };
}
