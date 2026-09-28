import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogs } from '../../data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Blog{
blogs=blogs;
}
