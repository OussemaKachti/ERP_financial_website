import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HorizontalMenu } from '../../components/app-menu/components/horizontal-menu/horizontal-menu';
import { Hero } from '../contact/contact-us1/components/hero/hero';
import { ContactInfo } from '../contact/contact-us1/components/contact-info/contact-info';
import { Footer1 } from './components/footer1/footer1';
import { MapOfficeDetail } from '../contact/contact-us1/components/map-office-detail/map-office-detail';
import { ContactForm } from '../contact/contact-us1/components/contact-form/contact-form';

@Component({
  selector: 'app-conatctus',
  standalone: true,
  imports: [HorizontalMenu,Hero,ContactInfo,Footer1,MapOfficeDetail,ContactForm],
  templateUrl: './conatctus.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Conatctus {

}
