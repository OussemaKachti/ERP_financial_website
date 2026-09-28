import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerData, footerSocialLinks } from '../../data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Footer {
  footerData = footerData;
  footerSocialLinks =footerSocialLinks;
  currentYear: number = new Date().getFullYear();
}
