import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Company } from "./components/company/company";
import { Accordion } from "./components/accordion/accordion";
import { ListContent } from "./components/list-content/list-content";
import { Skill } from "./components/skill/skill";
import { Integration } from "./components/integration/integration";
import { Cta } from "./components/cta/cta";
import { Pricing } from "./components/pricing/pricing";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer3 } from "../../components/footer3/footer3";

@Component({
  selector: 'app-saas-chatbox',
  standalone: true,
  imports: [Hero, Company, Accordion, ListContent, Skill, Integration, Cta, Pricing, HorizontalMenu, Footer3],
  templateUrl: './saas-chatbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class SaasChatbox {

}
