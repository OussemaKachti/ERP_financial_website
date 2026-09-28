import { Component, ChangeDetectionStrategy } from '@angular/core';
import { projects } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Projects {
  projects = projects
}
