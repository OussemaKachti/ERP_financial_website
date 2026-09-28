import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpDirective } from 'ngx-countup';
import { countersData, faqsData } from '../../data';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CountUpDirective, NgbAccordionModule],
  templateUrl: './process.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Process {
  active = 0;
  faqsData = faqsData;
  countersData =countersData;
}
