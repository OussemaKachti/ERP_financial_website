import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { BankingApp } from "./components/banking-app/banking-app";
import { BankDetail } from "./components/bank-detail/bank-detail";
import { Experience } from "./components/experience/experience";
import { Cta } from "./components/cta/cta";
import { BlogSlider } from "./components/blog-slider/blog-slider";
import { Testimonial } from "./components/testimonial/testimonial";
import { Features } from "./components/features/features";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer2 } from "../../components/footer2/footer2";

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [Hero, BankingApp, BankDetail, Experience, Cta, BlogSlider, Testimonial, Features, HorizontalMenu, Footer2],
  templateUrl: './showcase.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Showcase {

}
