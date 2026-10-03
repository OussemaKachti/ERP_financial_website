import {
  Component,
  ChangeDetectionStrategy,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { SITE } from '../site.config';

/**
 * Le film commercial en plein cadre. Une boucle muette de 8 secondes tourne
 * quand la section est à l'écran ; « Voir le film » la remplace, au même
 * endroit, par la version complète avec le son.
 */
@Component({
  selector: 'rf-film',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="z-film" aria-labelledby="film-titre">
      <div class="container z-film-head">
        <h2 class="z-h2" id="film-titre">{{ film.duree }} pour voir la différence.</h2>
        <div>
          <p class="z-lead">Le désordre de tous les jours, puis la même journée avec les trois applications reliées.</p>
          @if (!lecture()) {
            <button type="button" class="z-btn z-btn--light z-btn--lg" (click)="lire()">
              <i class="bi bi-play-fill"></i> Voir le film avec le son
            </button>
          } @else {
            <button type="button" class="z-btn z-btn--ghost z-btn--lg" style="--z-ink: #fff" (click)="fermer()">
              <i class="bi bi-x-lg"></i> Revenir à l’extrait
            </button>
          }
        </div>
      </div>

      <div class="z-film-frame">
        @if (!lecture()) {
          <video #boucle class="z-film-media" [attr.poster]="film.affiche" muted playsinline loop preload="none"
            aria-hidden="true" tabindex="-1">
            <source [src]="film.boucle" type="video/mp4" />
          </video>
          <button type="button" class="z-film-play" (click)="lire()" aria-label="Lire le film avec le son">
            <i class="bi bi-play-fill"></i>
          </button>
        } @else {
          <video class="z-film-media" controls autoplay playsinline [attr.poster]="film.affiche"
            aria-label="Film de présentation RFIDIA">
            <source [src]="film.hd" type="video/mp4" media="(min-width: 900px)" />
            <source [src]="film.sd" type="video/mp4" />
          </video>
        }
      </div>
    </section>
  `,
})
export class Film {
  protected readonly film = SITE.film;
  protected readonly lecture = signal(false);
  private readonly boucle = viewChild<ElementRef<HTMLVideoElement>>('boucle');
  private obs?: IntersectionObserver;

  constructor() {
    const hote = inject(ElementRef<HTMLElement>);
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      // La boucle ne se charge et ne tourne que lorsqu'elle est visible
      this.obs = new IntersectionObserver(
        ([e]) => {
          const v = this.boucle()?.nativeElement;
          if (!v) return;
          if (e.isIntersecting) v.play().catch(() => undefined);
          else v.pause();
        },
        { threshold: 0.25 }
      );
      this.obs.observe(hote.nativeElement);
    });
    inject(DestroyRef).onDestroy(() => this.obs?.disconnect());
  }

  lire(): void {
    this.lecture.set(true);
  }

  fermer(): void {
    this.lecture.set(false);
    setTimeout(() => this.boucle()?.nativeElement.play().catch(() => undefined));
  }
}
