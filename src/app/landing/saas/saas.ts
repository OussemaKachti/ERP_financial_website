import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Skill } from "./components/skill/skill";
import { About } from "./components/about/about";
import { Steps } from "./components/steps/steps";
import { TabFeature } from "./components/tab-feature/tab-feature";
import { Pricing } from "./components/pricing/pricing";
import { Blogs } from "./components/blogs/blogs";
import { Integration } from "./components/integration/integration";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-saas',
  standalone: true,
  imports: [Hero, Skill, About, Steps, TabFeature, Pricing, Blogs, Integration, HorizontalMenu, Footer],
  templateUrl: './saas.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Saas {

}
