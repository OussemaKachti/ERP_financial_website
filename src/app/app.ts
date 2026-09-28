import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { SeoService } from './site/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<router-outlet />`,
})
export class App {
  private seo = inject(SeoService);

  ngOnInit() {
    AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 40 });
    this.seo.init();
  }
}
