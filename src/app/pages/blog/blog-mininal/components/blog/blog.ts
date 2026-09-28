import { Component, ChangeDetectionStrategy } from '@angular/core';
import { blogs, blogs2 } from '../data';
import { RouterLink } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'blog-mininal-blog',
  standalone: true,
  imports: [RouterLink,NgbPaginationModule],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Blog {
  blogs = blogs;
  blogs2 = blogs2;
  page = 1;
}
