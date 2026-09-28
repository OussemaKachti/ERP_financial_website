import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { teams } from '../../data';

@Component({
  selector: 'finance-team',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Team {
 teams =teams;
}
