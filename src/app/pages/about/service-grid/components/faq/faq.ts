import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { accordionItems } from '../data';

@Component({
  selector: 'service-grid-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Faq {
  accordionItems = accordionItems;
}
