import { Component, ChangeDetectionStrategy } from '@angular/core';
import { counter } from '../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'saas-skill',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './skill.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Skill {
counter =counter;
}
