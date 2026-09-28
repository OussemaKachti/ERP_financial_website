import { Component, ChangeDetectionStrategy } from '@angular/core';
import { countersData } from '../data';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'case-study1-result',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './result.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
  
export class Result {
countersData= countersData
getDecimalPlaces(value: number): number {
    const str = value.toString();
    return str.includes('.') ? str.split('.')[1].length : 0;
  }
}
