import { Component, ChangeDetectionStrategy } from '@angular/core';
import { integrations } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'integrations',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './integrations.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Integrations {
  integrations = integrations
  allintegration = integrations
 
  filterIntegrations(category: string) {
    if (category === 'All') {
    this.integrations = this.allintegration;      
    } else {
    this.integrations = this.allintegration.filter(integration => integration.category === category);
    }
    }
}
