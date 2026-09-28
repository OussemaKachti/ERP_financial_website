import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Hero } from "./components/hero/hero";
import { Goal } from "./components/goal/goal";
import { Service } from "./components/service/service";
import { CoreValue } from "./components/core-value/core-value";
import { Industries } from "./components/industries/industries";
import { Video } from "./components/video/video";
import { Team } from "./components/team/team";
import { Clients } from "./components/clients/clients";
import { Footer1 } from "../../components/footer1/footer1";

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [HorizontalMenu, Hero, Goal, Service, CoreValue, Industries, Video, Team, Clients, Footer1],
  templateUrl: './finance.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Finance {

}
