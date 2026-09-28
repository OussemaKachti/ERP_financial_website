import { Component, ChangeDetectionStrategy } from '@angular/core';
import { blogData, categories, socialLinks, tags } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'blog-category',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './category.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Category {
  blogs = blogData
  categories = categories
  tags = tags
  socialLinks = socialLinks
}
