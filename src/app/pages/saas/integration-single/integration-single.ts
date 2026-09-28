import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HorizontalMenu } from "../../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { RouterLink } from '@angular/router';
import { Footer3 } from "../../../components/footer3/footer3";

@Component({
  selector: 'app-integration-single',
  standalone: true,
  imports: [HorizontalMenu, RouterLink, Footer3],
  templateUrl: './integration-single.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class IntegrationSingle {
integrationSteps = [
  {
    step: 'Step 1: Access master Dashboard',
    description: `With this integration, you can effortlessly synchronize data, messages, 
    and tasks between our software and Folio. Enjoy real-time updates, improved communication, 
    and a more organized workflow.`,
    points: [
      `Receive instant notifications in Folio whenever there's an update or action in Graphlo`,
      `Effortlessly create, assign, and manage tasks in both platforms, ensuring nothing falls through the cracks.`,
      `Keep all your data consistent and up to date, whether it's customer information, project details, or important messages.`
    ]
  },
  {
    step: 'Step 2: Generate integration token',
    description: `With this integration, you can effortlessly synchronize data, messages, 
    and tasks between our software and Folio. Enjoy real-time updates, improved communication, 
    and a more organized workflow.`,
    points: [
      `In the Graphlo dashboard, navigate to the "Integrations" or "API Settings" section, usually located in the settings menu`,
      `Locate the option to generate an integration token and follow the provided instructions.`,
      `This token will serve as the authentication mechanism between your SaaS application and Graphlo.`
    ]
  },
  {
    step: 'Step 3: Map data fields',
    description: '',
    points: [
      `After configuring the integration, you'll need to map the relevant data fields between your SaaS application and Graphlo.`,
      `This mapping ensures that the data exchanged between the two platforms is correctly synchronized.`,
      `Common data fields to map may include customer information, product details, orders, and inventory levels.`
    ]
  }
];

}
