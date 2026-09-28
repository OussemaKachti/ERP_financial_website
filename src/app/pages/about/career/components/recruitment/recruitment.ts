import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { steps } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'career-recruitment',
  standalone: true,
  imports: [NgbNavModule,RouterLink],
  templateUrl: './recruitment.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Recruitment {
  steps = steps;
  active = 1;
}
