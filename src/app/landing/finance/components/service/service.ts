import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { services } from '../../data';


@Component({
  selector: 'finance-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Service {

services = services;
}
