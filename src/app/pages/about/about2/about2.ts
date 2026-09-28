import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Client } from "./components/client/client";
import { Company } from "./components/company/company";
import { Review } from "./components/review/review";
import { Cta } from "./components/cta/cta";
import { HorizontalMenu } from '../../../components/app-menu/components/horizontal-menu/horizontal-menu';
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-about2',
  standalone: true,
  imports: [HorizontalMenu, Hero, About, Client, Company, Review, Cta, Footer1],
  templateUrl: './about2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About2 {

}
