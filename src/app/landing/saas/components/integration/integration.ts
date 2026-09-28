import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-integration',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integration.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Integration {

}
