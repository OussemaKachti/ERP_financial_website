import { Component, ChangeDetectionStrategy } from '@angular/core';
import { listContent } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-list-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
  listContent = listContent
}
