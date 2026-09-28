import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const CLE = 'rfidia-theme';

/** Thème clair / sombre. Le thème initial est posé par index.html. */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>(this.lire());

  basculer(): void {
    const suivant: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    this.theme.set(suivant);
    document.documentElement.setAttribute('data-bs-theme', suivant);
    try {
      localStorage.setItem(CLE, suivant);
    } catch {
      // stockage indisponible (navigation privée) : le choix vaut pour la page
    }
  }

  private lire(): Theme {
    return document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
  }
}
