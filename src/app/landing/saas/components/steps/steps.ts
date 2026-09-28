import { Component, ChangeDetectionStrategy } from '@angular/core';
import { steps } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'saas-steps',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './steps.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Steps {
  "title" = "Simplify data collection with easy"
  "buttonText" = "Sign up with google"
  "ctaText" = "Contact our team for more information"
  "ctaLink" = "/contact-v1"
  "ctaButtonText" = "Let’s chat"
  "gradBlurImage" = "assets/images/elements/grad-shape/blur-decoration-2.svg"
  steps = steps
}
