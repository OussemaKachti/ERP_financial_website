import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { avatars } from '../../data';

@Component({
  selector: 'software-hero',
  standalone: true,
  imports: [RouterLink,NgxTypedJsModule],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Hero {
  avatars =avatars;
}
