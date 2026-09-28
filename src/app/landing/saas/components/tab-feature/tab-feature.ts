import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'saas-tab-feature',
  standalone: true,
  imports: [NgbNavModule,RouterLink],
  templateUrl: './tab-feature.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class TabFeature{
  active = 1;

}
