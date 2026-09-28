import { Component, ChangeDetectionStrategy } from '@angular/core';
import { services } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './offer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Offer {
  services = services
}
