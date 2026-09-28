import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'case-study2-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Cta{

}
