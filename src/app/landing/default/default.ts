import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Leader } from './components/leader/leader';
import { Offer } from './components/offer/offer';
import { Process } from './components/process/process';
import { Project } from './components/project/project';
import { Testimonial } from './components/testimonial/testimonial';
import { Subscribe } from './components/subscribe/subscribe';
import { Blog } from './components/blog/blog';
import { HorizontalMenu } from '../../components/app-menu/components/horizontal-menu/horizontal-menu';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [
    Blog,
    Hero,
    HorizontalMenu,
    Leader,
    Offer,
    Process,
    Project,
    Testimonial,
    Subscribe,
    Footer,
  ],
  templateUrl: './default.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Default {}
