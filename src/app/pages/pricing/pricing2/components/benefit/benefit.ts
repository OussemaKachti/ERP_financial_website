import { Component, ChangeDetectionStrategy } from '@angular/core';
import { featureList } from '../data';
import { CountUpDirective } from 'ngx-countup';

interface skill {
  value:number;
  suffix: string;
  label: string;
}

@Component({
  selector: 'pricing2-benefit',
  standalone: true,
  imports: [CountUpDirective],
  templateUrl: './benefit.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Benefit {
  featureList = featureList;
  skills: skill[] = [
    {
      value: 2000,
      suffix: '+',
      label: 'Customers have used our awesome templates since 2019',
    },
    {
      value: 85,
      suffix: '+',
      label: "Client's projects complete all over the world",
    },
  ];

  quote = {
    text: 'We believe that it takes great people to deliver a great product',
    author: 'By Albert Schweitzer',
  };
}
