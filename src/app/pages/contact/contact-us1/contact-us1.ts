import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { ContactInfo } from "./components/contact-info/contact-info";
import { ContactForm } from "./components/contact-form/contact-form";
import { MapOfficeDetail } from "./components/map-office-detail/map-office-detail";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";
@Component({
  selector: 'app-contact-us1',
  standalone: true,
  imports: [Hero, ContactInfo, ContactForm, MapOfficeDetail, HorizontalMenu, Footer1],
  templateUrl: './contact-us1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
  
})
export class ContactUs1 {

}
