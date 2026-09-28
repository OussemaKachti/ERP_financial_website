import { Component, ChangeDetectionStrategy } from '@angular/core';
import { about } from '../data';
import { CountUpDirective } from 'ngx-countup';
import { RouterLink } from '@angular/router';
import { LightgalleryModule } from 'lightgallery/angular';
import lgVideo from 'lightgallery/plugins/video'

@Component({
  selector: 'about1-hero',
  standalone: true,
  imports: [CountUpDirective, RouterLink, LightgalleryModule],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './hero.scss'
})
export class Hero {
  about = about

  setting = {
    download: false,
    counter: false,
    plugins: [lgVideo],
    selector: 'a',
  }
}
