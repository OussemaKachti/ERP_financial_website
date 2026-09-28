import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coming-soon.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``
})
export class ComingSoon {
  ngOnInit() {
    const bodyElement = document.querySelector('body');
    bodyElement?.classList.add('bg-secondary')
  }
}
