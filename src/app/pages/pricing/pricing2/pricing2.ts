import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Benefit } from "./components/benefit/benefit";
import { Faq } from "./components/faq/faq";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-pricing2',
  standalone: true,
  imports: [Hero, Benefit, Faq, HorizontalMenu, Footer1],
  templateUrl: './pricing2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Pricing2 {

}
