import { Component, ChangeDetectionStrategy } from '@angular/core';
import { footerData, footerPlatforms } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Footer {
footerPlatforms =footerPlatforms;
footerData = footerData;
  currentYear: number = new Date().getFullYear();
}
