import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyThingDirective } from '../../../../../shared/directives/sticky-thing.directive';

@Component({
  selector: 'service-single-content',
  standalone: true,
  imports: [StickyThingDirective,RouterLink],
  templateUrl: './content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Content {

}
