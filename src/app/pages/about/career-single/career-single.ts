import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Job } from "./components/job/job";
import { Hero } from "./components/hero/hero";
import {  HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import {  Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-career-single',
  standalone: true,
  imports: [Job, Hero, HorizontalMenu, Footer1],
  templateUrl: './career-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class CareerSingle {

}
