
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { features2 } from '../data';

@Component({
  selector: 'product-product-feature2',
  standalone: true,
  imports: [],
  templateUrl: './product-feature2.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ProductFeature2{
  features2 = features2
}
