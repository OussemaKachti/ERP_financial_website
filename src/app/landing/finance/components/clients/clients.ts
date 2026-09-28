import { Component, ChangeDetectionStrategy } from '@angular/core';
import { avatars, clients } from '../../data';

@Component({
  selector: 'finance-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Clients {
  avatars = avatars;
  clients = clients;
}
