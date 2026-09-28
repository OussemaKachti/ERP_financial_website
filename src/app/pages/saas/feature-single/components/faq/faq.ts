import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { faqList } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'feature-single-faq',
  standalone: true,
  imports: [NgbAccordionModule,RouterLink],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Faq {
  faqList = faqList;
}
