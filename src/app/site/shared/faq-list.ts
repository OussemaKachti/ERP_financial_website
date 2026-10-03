import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Question } from '../data/home';

@Component({
  selector: 'rf-faq-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="z-faq">
      @for (item of questions(); track item.q; let premier = $first) {
        <details [open]="premier && ouvrirPremiere()">
          <summary>{{ item.q }} <span class="z-faq-mark" aria-hidden="true"></span></summary>
          <div class="z-faq-body">
            @for (p of item.r; track p) {
              <p>{{ p }}</p>
            }
          </div>
        </details>
      }
    </div>
  `,
})
export class FaqList {
  readonly questions = input.required<Question[]>();
  readonly ouvrirPremiere = input(true);
}
