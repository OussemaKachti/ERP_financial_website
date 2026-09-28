import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Footer1 } from "../../conatctus/components/footer1/footer1";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Hero } from "./components/hero/hero";
import { Compare } from "./components/compare/compare";
import { Faq } from "./components/faq/faq";

@Component({
  selector: 'app-pricing1',
  standalone: true,
  imports: [Footer1, HorizontalMenu, Hero, Compare, Faq],
  templateUrl: './pricing1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Pricing1 {
}
