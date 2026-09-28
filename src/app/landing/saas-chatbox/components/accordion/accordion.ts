import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { faqs } from '../data';

@Component({
  selector: 'saas-chatbox-accordion',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './accordion.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Accordion {
faqs = faqs;
}
