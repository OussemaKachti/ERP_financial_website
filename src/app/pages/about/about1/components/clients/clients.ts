import { Component, ChangeDetectionStrategy } from '@angular/core';
import { companyicons } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about1-clients',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Clients {
companyicons= companyicons;
}
