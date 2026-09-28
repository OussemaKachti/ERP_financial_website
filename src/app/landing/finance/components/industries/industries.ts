import { RouterLink } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { industries } from '../../data';

register();

@Component({
  selector: 'finance-industries',
  standalone: true,
  imports: [RouterLink],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './industries.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Industries {
  industries=industries;

}
