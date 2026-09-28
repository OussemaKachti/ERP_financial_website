import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Service } from "./components/service/service";
import { Faq } from "./components/faq/faq";
import { Contact } from "./components/contact/contact";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-service-grid',
  standalone: true,
  imports: [Hero, Service, Faq, Contact, HorizontalMenu, Footer1],
  templateUrl: './service-grid.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ServiceGrid {

}
