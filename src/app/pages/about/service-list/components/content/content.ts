import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contentData } from '../data';

@Component({
  selector: 'service-list-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Content {
contentData= contentData;
}
