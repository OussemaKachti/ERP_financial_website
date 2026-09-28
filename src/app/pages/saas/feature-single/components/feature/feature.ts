import { Component, ChangeDetectionStrategy } from '@angular/core';
import { featureList } from '../data';

@Component({
  selector: 'feature-single-feature',
  standalone: true,
  imports: [],
  templateUrl: './feature.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Feature {
featureList = featureList;
}
                                                                                                                                       