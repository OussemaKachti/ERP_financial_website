import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Cta } from "./components/cta/cta";
import { Map } from "./components/map/map";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-contact-us2',
  standalone: true,
  imports: [Hero, Cta, Map, HorizontalMenu, Footer1],
  templateUrl: './contact-us2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ContactUs2 {

}
