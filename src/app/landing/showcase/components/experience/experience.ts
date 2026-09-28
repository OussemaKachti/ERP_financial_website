import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';
import { experienceData } from '../data';

@Component({
  selector: 'showcase-experience',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Experience {
experienceData = experienceData
}
