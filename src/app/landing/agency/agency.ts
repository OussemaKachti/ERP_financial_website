import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Testimonial } from "./components/testimonial/testimonial";
import { Client } from "./components/client/client";
import { Award } from "./components/award/award";
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer2 } from "../../components/footer2/footer2";

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [Hero, Features, About, Services, Projects, Skills, Testimonial, Client, Award, HorizontalMenu, Footer2],
  templateUrl: './agency.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Agency {

}
