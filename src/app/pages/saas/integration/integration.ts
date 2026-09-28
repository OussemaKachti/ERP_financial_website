import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Integrations } from "./components/integrations/integrations";
import { Cta } from "./components/cta/cta";
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { Footer3 } from "../../../components/footer3/footer3";
@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [Hero, Integrations, Cta, HorizontalMenu, Footer3],
  templateUrl: './integration.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
   :host(app-integration) {
      display: contents;
    }`
})
export class Integration {
  @Input() showExtraPages?: boolean
  @Input() showContactPages?: boolean
  @Input() startBookingMenu?: boolean
  @Input() menuClassName?: string


}
