import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { features } from '../data';

@Component({
  selector: 'about1-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {
features =features;
}
