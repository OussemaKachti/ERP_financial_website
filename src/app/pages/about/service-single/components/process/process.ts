import { Component, ChangeDetectionStrategy } from '@angular/core';
import { process } from '../data';

@Component({
  selector: 'service-single-process',
  standalone: true,
  imports: [],
  templateUrl: './process.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Process {
  process = process


}
