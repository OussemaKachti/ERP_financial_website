import { Component, ChangeDetectionStrategy } from '@angular/core';
import { developmentTips } from '../data';
import { StickyThingDirective } from '../../../../shared/directives/sticky-thing.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'portfolio-develop-tip',
  standalone: true,
  imports: [StickyThingDirective,RouterLink],
  templateUrl: './develop-tip.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class DevelopTip {
  developmentTips = developmentTips
}
