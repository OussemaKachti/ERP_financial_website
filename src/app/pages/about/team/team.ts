import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Teams } from "./components/team/team";
import { Video } from "./components/video/video";
import { Cta } from "./components/cta/cta";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [Hero, Teams, Video, Cta, HorizontalMenu, Footer1],
  templateUrl: './team.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Team {

}
