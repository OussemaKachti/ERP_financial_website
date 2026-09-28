import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Category } from "./components/category/category";
import { Author } from "./components/author/author";
import { Highlight } from "./components/highlight/highlight";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [Hero, Category, Author, Highlight, HorizontalMenu, Footer],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Blog {

}
