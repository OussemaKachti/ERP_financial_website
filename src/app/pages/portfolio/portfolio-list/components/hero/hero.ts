import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-list-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {

}
