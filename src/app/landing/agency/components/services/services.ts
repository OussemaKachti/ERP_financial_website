import { Component, ChangeDetectionStrategy } from '@angular/core';
import { service, servicesData } from '../data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'agency-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Services {
  service = service;
  servicesData = servicesData;
}
