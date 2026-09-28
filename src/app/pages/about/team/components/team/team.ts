import { Component, ChangeDetectionStrategy } from '@angular/core';
import { team } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'team',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Teams {
  team = team
}
