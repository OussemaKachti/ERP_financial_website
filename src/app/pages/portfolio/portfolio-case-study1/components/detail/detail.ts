import { Component, ChangeDetectionStrategy } from '@angular/core';
import { services } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'case-study1-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Detail {
services=services;
}
