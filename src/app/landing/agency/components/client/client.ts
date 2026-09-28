import { Component, ChangeDetectionStrategy } from '@angular/core';
import { clientdata } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'agency-client',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './client.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Client {
  clientdata = clientdata
}
