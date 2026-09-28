import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LightgalleryModule } from 'lightgallery/angular';
import { CountUpDirective } from 'ngx-countup';

import lgVideo from 'lightgallery/plugins/video';

@Component({
  selector: 'team-video',
  standalone: true,
  imports: [CountUpDirective, LightgalleryModule],
  templateUrl: './video.html',
  styleUrl: './video.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Video {
  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  };
}
