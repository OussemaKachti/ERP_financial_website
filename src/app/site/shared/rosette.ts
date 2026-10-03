import {
  Component,
  ChangeDetectionStrategy,
  DestroyRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { ModuleKey } from '../data/modules';

/**
 * Rosace de zellige du hero : une étoile à huit branches au centre (l'anneau
 * RFIDIA), entourée de trois couronnes de tesselles. Chaque couronne est une
 * application : cerfs-volants RH, pointes CRM, flèches Finance. Les pièces
 * arrivent dispersées et s'emboîtent couronne par couronne ; l'application
 * active soulève sa couronne et laisse les autres en émail clair.
 */

interface Piece {
  id: string;
  module: ModuleKey | null;
  points: string;
  /** Décalage et rotation de départ, avant assemblage. */
  dx: number;
  dy: number;
  rot: number;
  delai: number;
  /** Légère variation d'émail, comme sur un vrai carreau. */
  teinte: number;
}

const R0 = 100; // pointes de l'étoile centrale
const R_IN = (R0 * Math.cos(Math.PI / 4)) / Math.cos(Math.PI / 8); // creux de l'étoile
const R1 = 152; // pointes des cerfs-volants
const R2 = 238; // pointes de la couronne CRM
const R3 = 252; // pointes de la couronne RH

function pt(r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r * Math.cos(a), r * Math.sin(a)];
}

function poly(pts: [number, number][]): string {
  return pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
}

/** Générateur pseudo-aléatoire stable : la rosace est la même à chaque visite. */
function alea(graine: number): () => number {
  let s = graine;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function construire(): Piece[] {
  const r = alea(42);
  const pieces: Piece[] = [];
  const depart = (couronne: number, i: number, angle: number) => {
    const [x, y] = pt(120 + couronne * 70 + r() * 60, angle + (r() - 0.5) * 40);
    return { dx: x * 0.9, dy: y * 0.9, rot: (r() - 0.5) * 120, delai: 120 + couronne * 260 + i * 38, teinte: Math.round(r() * 10) - 3 };
  };

  // Étoile centrale (blanche, porte l'anneau)
  const etoile: [number, number][] = [];
  for (let k = 0; k < 8; k++) {
    etoile.push(pt(R0, k * 45), pt(R_IN, k * 45 + 22.5));
  }
  pieces.push({ id: 'centre', module: null, points: poly(etoile), dx: 0, dy: 0, rot: 0, delai: 0, teinte: 0 });

  for (let k = 0; k < 8; k++) {
    const a = k * 45;
    // Couronne 1 — RH : cerfs-volants dans les creux de l'étoile
    pieces.push({
      id: `r${k}`,
      module: 'rh',
      points: poly([pt(R0, a), pt(R_IN, a + 22.5), pt(R0, a + 45), pt(R1, a + 22.5)]),
      ...depart(0, k, a + 22.5),
    });
  }
  for (let k = 0; k < 8; k++) {
    const a = k * 45;
    // Couronne 2 — CRM : pointes qui prolongent les branches de l'étoile
    pieces.push({
      id: `c${k}`,
      module: 'crm',
      points: poly([pt(R1, a - 22.5), pt(R0, a), pt(R1, a + 22.5), pt(R2, a)]),
      ...depart(1, k, a),
    });
  }
  for (let k = 0; k < 8; k++) {
    const a = k * 45;
    // Couronne 3 — Finance : flèches entre les pointes, qui ferment la rosace
    pieces.push({
      id: `f${k}`,
      module: 'finance',
      points: poly([pt(R2, a), pt(R1, a + 22.5), pt(R2, a + 45), pt(R3, a + 22.5)]),
      ...depart(2, k, a + 22.5),
    });
  }
  return pieces;
}

const PIECES = construire();

@Component({
  selector: 'rf-rosette',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'z-rosette', '[class.is-set]': 'pose()', '[class.is-ready]': 'pret()', '[attr.data-actif]': 'actif() ?? null' },
  template: `
    <svg viewBox="-262 -262 524 524" role="img" [attr.aria-label]="label">
      <defs>
        <linearGradient id="z-glaze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fff" stop-opacity=".34" />
          <stop offset=".45" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="z-sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#fff" stop-opacity="0" />
          <stop offset=".5" stop-color="#fff" stop-opacity=".38" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </linearGradient>
        <clipPath id="z-rosace">
          @for (p of pieces; track p.id) {
            <polygon [attr.points]="p.points" />
          }
        </clipPath>
      </defs>

      @for (p of pieces; track p.id) {
        <g class="z-piece" [attr.data-module]="p.module"
          [style.--dx.px]="p.dx" [style.--dy.px]="p.dy" [style.--rot.deg]="p.rot"
          [style.--delai.ms]="p.delai" [style.--teinte]="p.teinte">
          <polygon class="z-piece-fill" [attr.points]="p.points" />
          <polygon class="z-piece-glaze" [attr.points]="p.points" fill="url(#z-glaze)" />
        </g>
      }

      <g clip-path="url(#z-rosace)" class="z-rosette-sheen" aria-hidden="true">
        <rect x="-520" y="-262" width="300" height="524" fill="url(#z-sheen)" />
      </g>

      <image href="assets/rfidia/brand/ring.png" x="-58" y="-58" width="116" height="116" class="z-rosette-ring" />
    </svg>
  `,
})
export class Rosette {
  /** Application mise en avant (survol des boutons du hero). */
  readonly actif = input<ModuleKey | null>(null);

  protected readonly pieces = PIECES;
  protected readonly pose = signal(false);
  /** Assemblage terminé : les transitions deviennent celles du survol. */
  protected readonly pret = signal(false);
  protected readonly label =
    'Rosace de zellige : les applications Finance, CRM et RH s’emboîtent autour de l’anneau RFIDIA';

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduit) {
        this.pose.set(true);
        this.pret.set(true);
        return;
      }
      const t1 = setTimeout(() => this.pose.set(true), 80);
      const t2 = setTimeout(() => this.pret.set(true), 2600);
      destroy.onDestroy(() => {
        clearTimeout(t1);
        clearTimeout(t2);
      });
    });
  }
}
