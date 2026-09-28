import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { ProductFeature } from "./components/product-feature/product-feature";
import { ProductFeature2 } from "./components/product-feature2/product-feature2";
import { Grid } from "./components/grid/grid";
import { Cta } from "./components/cta/cta";
import { Testimonial } from "./components/testimonial/testimonial";
import { Newsletter } from "./components/newsletter/newsletter";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [Hero, Features, ProductFeature, ProductFeature2, Grid, Cta, Testimonial, Newsletter, HorizontalMenu, Footer],
  templateUrl: './product.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Product {

}
