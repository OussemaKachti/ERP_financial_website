import { Component, ChangeDetectionStrategy } from '@angular/core';
import { heroImages } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'showcase-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
heroImages= heroImages;
}
                         