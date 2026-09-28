import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'software-subscribe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './subscribe.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class Subscribe{

}
