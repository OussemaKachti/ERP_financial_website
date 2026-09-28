import { Component, ChangeDetectionStrategy } from '@angular/core';
import { products } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'product-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grid.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Grid {
  products = products
}
