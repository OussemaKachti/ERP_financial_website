import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-list-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Contact {

}
