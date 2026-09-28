import { Component, ChangeDetectionStrategy } from '@angular/core';
import { job } from '../data';

@Component({
  selector: 'career-job-listing',
  standalone: true,
  imports: [],
  templateUrl: './job-listing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class JobListing {
  job = job
}
