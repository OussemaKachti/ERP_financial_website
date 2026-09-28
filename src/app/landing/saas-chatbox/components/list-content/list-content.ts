import { Component, ChangeDetectionStrategy } from '@angular/core';
import { listContent } from '../data';

@Component({
  selector: 'saas-chatbox-list-content',
  standalone: true,
  imports: [],
  templateUrl: './list-content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ListContent {
  listContent= listContent;

}
