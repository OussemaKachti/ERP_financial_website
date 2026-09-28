import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpDirective } from 'ngx-countup';
import { counters, socialLinks } from '../data';

@Component({
  selector: 'portfolio-about',
  standalone: true,
  imports: [CountUpDirective,RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {
socialLinks =socialLinks;
counters =counters;
}
