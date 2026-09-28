import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HorizontalMenu } from "../../components/app-menu/components/horizontal-menu/horizontal-menu";
import { RouterLink } from '@angular/router';
import { Footer1 } from '../conatctus/components/footer1/footer1';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [HorizontalMenu, RouterLink, Footer1],
  templateUrl: './error.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Error{

}
