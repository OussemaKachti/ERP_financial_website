import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'product-cta',
  standalone: true,
  imports: [LightgalleryModule,RouterLink],
  templateUrl: './cta.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cta.scss'
})
export class Cta {

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
