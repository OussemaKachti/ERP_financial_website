import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tabs } from '../data';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'agency-about',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {  
  tabs = tabs; 
   activeId = 'tab1';
}
