import { Component, ChangeDetectionStrategy, input } from '@angular/core';

/** Capture d'écran présentée dans une fenêtre de navigateur. */
@Component({
  selector: 'rf-app-window',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="z-window">
      <div class="z-window-bar" aria-hidden="true">
        <span class="z-window-dots"><span></span><span></span><span></span></span>
        <span class="z-window-url"><i class="bi bi-lock-fill"></i>{{ url() }}</span>
      </div>
      <img [src]="src()" [alt]="alt()" [attr.width]="largeur()" [attr.height]="hauteur()"
        [attr.loading]="prioritaire() ? 'eager' : 'lazy'" [attr.fetchpriority]="prioritaire() ? 'high' : null"
        decoding="async">
    </div>
  `,
})
export class AppWindow {
  readonly src = input.required<string>();
  readonly alt = input('');
  readonly url = input('');
  readonly largeur = input(2000);
  readonly hauteur = input(1250);
  readonly prioritaire = input(false);
}
