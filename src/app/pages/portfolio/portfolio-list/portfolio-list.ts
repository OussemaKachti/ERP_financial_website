import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Portfolio } from "./components/portfolio/portfolio";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-portfolio-list',
  standalone: true,
  imports: [Hero, Portfolio, HorizontalMenu, Footer1],
  templateUrl: './portfolio-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class PortfolioList {

}
