import { Component, ChangeDetectionStrategy } from '@angular/core';
import { services } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-grid-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Service {
  services = services
}
