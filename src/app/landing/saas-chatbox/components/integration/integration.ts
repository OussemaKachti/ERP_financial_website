import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { integrationsicons } from '../data';

@Component({
  selector: 'saas-chatbox-integration',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integration.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Integration {
integrationsicons= integrationsicons;
}
