import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Recruitment } from "./components/recruitment/recruitment";
import { OfficeGallary } from "./components/office-gallary/office-gallary";
import { JobListing } from "./components/job-listing/job-listing";
import { Review } from "./components/review/review";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer1 } from "../../conatctus/components/footer1/footer1";

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [Hero, Recruitment, OfficeGallary, JobListing, Review, HorizontalMenu, Footer1],
  templateUrl: './career.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Career {

}
