import { Component, ChangeDetectionStrategy } from '@angular/core';
import { values } from '../../data';

@Component({
  selector: 'finance-core-value',
  standalone: true,
  imports: [],
  templateUrl: './core-value.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class CoreValue {
  values = values;
}
