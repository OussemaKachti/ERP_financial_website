import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { aboutsData } from '../../data';

@Component({
  selector: 'software-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {
aboutsData= aboutsData;
}
