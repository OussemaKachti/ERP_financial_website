import { Component, ChangeDetectionStrategy } from '@angular/core';
import { JarallaxDirective } from '../../../../../components/jarallax-directive';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video';

@Component({
  selector: 'case-study1-images',
  standalone: true,
  imports: [JarallaxDirective, LightgalleryModule],
  templateUrl: './images.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './images.scss',
})
export class Images {
  images = [
    {
      src: 'assets/images/portfolio/3by4/09.jpg',
      alt: 'portfolio-img',
      link: 'assets/images/portfolio/3by4/09.jpg',
    },
    {
      src: 'assets/images/portfolio/3by4/06.jpg',
      alt: 'portfolio-img',
      link: 'assets/images/portfolio/3by4/06.jpg',
    },
    {
      src: 'assets/images/portfolio/3by4/01.jpg',
      alt: 'portfolio-img',
      link: 'assets/images/portfolio/3by4/01.jpg',
    },
  ];

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  };
}
