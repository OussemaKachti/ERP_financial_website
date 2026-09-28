import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class About {
  "title" = "Easily streamline your user analytics"
  "buttonText" = "Know more"
  "buttonLink" = "/about-v1"
  "features" = [
    {
      "icon": "assets/images/elements/hourglass.png",
      "title": "Real-time data insights",
      "description": "Monitor key metrics, track performance, and gain actionable insights instantly."
    },
    {
      "icon": "assets/images/elements/report-book.png",
      "title": "Customizable reports",
      "description": "With our customizable reporting tools, you can dive deep into specific metrics."
    }
  ]
  "ctaText" = "Contact our team for more information"
  "ctaLink" = "/contact-v1"
  "ctaButtonText" = "Let’s chat"
  "saasImage" = "assets/images/elements/saas-decoration/05.png"
  "mainImage" = "assets/images/about/06.jpg"
}
