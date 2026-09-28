
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { authorsData } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-author',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './author.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Author {
  authorsData = authorsData
}
