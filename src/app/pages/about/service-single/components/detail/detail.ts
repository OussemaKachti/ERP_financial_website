import { Component, ChangeDetectionStrategy } from '@angular/core';
import { benefits, faqsData, technologicon } from '../data';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'service-single-detail',
  standalone: true,
  imports: [NgbAccordionModule,RouterLink],
  templateUrl: './detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Detail {
  benefits = benefits
  faqsData = faqsData
  technologicon =technologicon
}
