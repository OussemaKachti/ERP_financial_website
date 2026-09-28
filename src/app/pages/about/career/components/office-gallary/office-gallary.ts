import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'career-office-gallary',
  standalone: true,
  imports: [LightgalleryModule],
  templateUrl: './office-gallary.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './office-gallary.scss'
})
export class OfficeGallary {

  setting = {
    download: false,
    counter: false,
    selector: 'a',
  }
}
