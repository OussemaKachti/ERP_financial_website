import { Component, ChangeDetectionStrategy } from '@angular/core';
import { aboutClientlogo } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about2-client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './client.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Client {
  aboutClientlogo = aboutClientlogo
}
