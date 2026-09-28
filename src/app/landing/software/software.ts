import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Service } from "./components/service/service";
import { Method } from "./components/method/method";
import { Client } from "./components/client/client";
import { Plan } from "./components/plan/plan";
import { Faq } from "./components/faq/faq";
import { Subscribe } from "./components/subscribe/subscribe";
import { Testimonial } from "./components/testimonial/testimonial";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer2 } from "../../components/footer2/footer2";

@Component({
  selector: 'app-software',
  standalone: true,
  imports: [Hero, About, Service, Method, Client, Plan, Faq, Subscribe, Testimonial, HorizontalMenu, Footer2],
  templateUrl: './software.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Software{

}
