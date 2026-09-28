import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { faqData } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'pricing1-faq',
  standalone: true,
  imports: [NgbAccordionModule,RouterLink],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Faq {
faqData =faqData; 
}
