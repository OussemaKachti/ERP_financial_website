import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BlogDetail } from "./components/blog-detail/blog-detail";
import { RelatedBlog } from './components/related-blog/related-blog';
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";  
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [BlogDetail, RelatedBlog, HorizontalMenu, Footer1],
  templateUrl: './blog-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class BlogSingle {

}
