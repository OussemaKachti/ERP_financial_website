
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { About } from "./components/about/about";
import { DevelopTip } from "./components/develop-tip/develop-tip";
import { Cta } from "./components/cta/cta";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer2 } from "../../components/footer2/footer2";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Hero, Projects, About, DevelopTip, Cta, HorizontalMenu, Footer2],
  templateUrl: './portfolio.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Portfolio {

}
