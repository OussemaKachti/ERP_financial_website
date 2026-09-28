import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Feature } from "./components/feature/feature";
import { Testimonial } from "./components/testimonial/testimonial";
import { Faq } from "./components/faq/faq";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer3 } from "../../../components/footer3/footer3";

@Component({
  selector: 'app-feature-single',
  standalone: true,
  imports: [Hero, Feature, Testimonial, Faq, HorizontalMenu, Footer3],
  templateUrl: './feature-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class FeatureSingle {

}
