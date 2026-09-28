import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { Question } from '../data/home';

@Component({
  selector: 'rf-faq-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rf-faq">
      @for (item of questions(); track item.q; let premier = $first) {
        <details [open]="premier && ouvrirPremiere()">
          <summary>{{ item.q }} <i class="bi bi-plus-lg" aria-hidden="true"></i></summary>
          <div class="rf-faq-body">
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
