import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Content } from "./components/content/content";
import { Detail } from "./components/detail/detail";
import { Process } from "./components/process/process";
import { Showcase } from "./components/showcase/showcase";
import { Testimonial } from "./components/testimonial/testimonial";
import { Contact } from "../service-list/components/contact/contact";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-service-single',
  standalone: true,
  imports: [Content, Detail, Process, Showcase, Testimonial, Contact, HorizontalMenu, Footer1],
  templateUrl: './service-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ServiceSingle {

}
