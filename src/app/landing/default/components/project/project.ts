import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Project {}
