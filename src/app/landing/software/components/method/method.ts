import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video'
import { JarallaxDirective } from '../../../../components/jarallax-directive';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'software-method',
  standalone: true,
  imports: [RouterLink, LightgalleryModule,JarallaxDirective],
  templateUrl: './method.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './method.scss'
})
export class Method {

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }

}
