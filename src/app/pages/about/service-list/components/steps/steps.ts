import { Component, ChangeDetectionStrategy } from '@angular/core';
import { stepsData } from '../data';
@Component({
  selector: 'service-list-steps',
  standalone: true,
  imports: [],
  templateUrl: './steps.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Steps {
  stepsData = stepsData
}
