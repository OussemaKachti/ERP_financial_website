import { Component, ChangeDetectionStrategy } from '@angular/core';
import { countersData, features } from '../data';
import { CountUpDirective } from 'ngx-countup';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'feature-single-hero',
  standalone: true,
  imports: [CountUpDirective,RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
countersData =  countersData;
features =features;
}
