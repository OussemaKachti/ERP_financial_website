import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Detail } from "./components/detail/detail";
import { Images } from "./components/images/images";
import { ReletedWork } from "./components/releted-work/releted-work";
import { Result } from "./components/result/result";
import { Cta } from "./components/cta/cta";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-portfolio-case-study1',
  standalone: true,
  imports: [Hero, Detail, Images, ReletedWork, Result, Cta, HorizontalMenu, Footer1],
  templateUrl: './portfolio-case-study1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class PortfolioCaseStudy1 {

}
