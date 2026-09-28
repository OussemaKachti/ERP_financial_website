import { Component, ChangeDetectionStrategy } from '@angular/core';
import { skill } from '../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'agency-skills',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Skills {
  skill = skill
}
