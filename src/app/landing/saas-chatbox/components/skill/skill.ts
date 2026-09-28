import { Component, ChangeDetectionStrategy } from '@angular/core';
import { featuresStats } from '../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'saas-chatbox-skill',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './skill.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Skill {
featuresStats =featuresStats;
}
