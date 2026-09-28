import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'showcase-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cta.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Cta {

}
