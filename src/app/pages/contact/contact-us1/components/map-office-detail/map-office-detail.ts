import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Office {
  country: string;
  flag: string;
  address: string[];
}

@Component({
  selector: 'contact-us1-map-office-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './map-office-detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class MapOfficeDetail {
  offices: Office[] = [
    {
      country: 'New York, USA (HQ)',
      flag: 'assets/images/flags/uk.svg',
      address: [
        '750 Sing Sing Rd, Horseheads, NY, 14845',
        'Call: 469-537-2410 (Toll-free)',
        'Support time: Monday to Saturday 9:00 am to 5:30 pm',
      ],
    },
    {
      country: 'India',
      flag: 'assets/images/flags/in.svg',
      address: [
        '55/123 Norman street, Banking road, Sydney NSW 5000',
        'Call: 258-698-2410 (Toll-free)',
        'Support time: Monday to Saturday 9:00 am to 5:30 pm',
      ],
    },
  ];
}
