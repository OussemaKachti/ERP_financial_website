import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StickyThingDirective } from '../../../../shared/directives/sticky-thing.directive';
import { skills } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-hero',
  standalone: true,
  imports: [StickyThingDirective,RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
  skills = skills
}
