import { Component, ChangeDetectionStrategy } from '@angular/core';
import { contactInfo } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contact-us1-contact-info',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-info.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ContactInfo {
  contactInfo = contactInfo
}
