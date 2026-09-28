import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Steps } from "./components/steps/steps";
import { Content } from "./components/content/content";
import { Contact } from "./components/contact/contact";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [Hero, Steps, Content, Contact, HorizontalMenu, Footer1],
  templateUrl: './service-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ServiceList {

}
