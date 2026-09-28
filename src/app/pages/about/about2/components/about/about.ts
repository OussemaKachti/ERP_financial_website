import { Component, ChangeDetectionStrategy } from '@angular/core';
import { aboutAward } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about2-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {
  aboutAward= aboutAward
}
