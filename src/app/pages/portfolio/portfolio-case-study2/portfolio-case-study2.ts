import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Cta } from "./components/cta/cta";
import { Hero } from "./components/hero/hero";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-portfolio-case-study2',
  standalone: true,
  imports: [Cta, Hero, HorizontalMenu, Footer1],
  templateUrl: './portfolio-case-study2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class PortfolioCaseStudy2 {

}
