import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Home } from "./components/home/home";
import { Blog } from "./components/blog/blog";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from '../../../components/footer1/footer1';

@Component({
  selector: 'app-blog-mininal',
  standalone: true,
  imports: [Home, Blog, HorizontalMenu, Footer1],
  templateUrl: './blog-mininal.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class BlogMininal {

}
