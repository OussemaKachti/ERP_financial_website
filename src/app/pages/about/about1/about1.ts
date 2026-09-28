import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Team} from "./components/team/team";
import { Clients } from "./components/clients/clients";
import { Gallary } from "./components/gallary/gallary";
import { Cta } from "./components/cta/cta";
import {  HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { About } from "./components/about/about";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-about1',
  standalone: true,
  imports: [Hero, Team, Clients, Gallary, Cta, HorizontalMenu, About, Footer1],
  templateUrl: './about1.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About1 {

}
            