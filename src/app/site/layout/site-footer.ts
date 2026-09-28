import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../site.config';

@Component({
  selector: 'rf-site-footer',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly annee = new Date().getFullYear();
}
