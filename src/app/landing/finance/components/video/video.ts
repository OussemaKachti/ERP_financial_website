import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video'
import { JarallaxDirective } from '../../../../components/jarallax-directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'finance-video',
  standalone: true,
  imports: [LightgalleryModule,JarallaxDirective,RouterLink],
  templateUrl: './video.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './video.scss'
})
export class Video {

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }

}
