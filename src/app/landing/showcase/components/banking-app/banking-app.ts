import { Component, ChangeDetectionStrategy } from '@angular/core';
import { features, ratings } from '../data';

@Component({
  selector: 'showcase-banking-app',
  standalone: true,
  imports: [],
  templateUrl: './banking-app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class BankingApp {
  features = features
  ratings = ratings
}
