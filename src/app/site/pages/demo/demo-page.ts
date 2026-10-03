import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SITE } from '../../site.config';
import { EMAIL, MODULES, MODULE_ORDER, ModuleKey } from '../../data/modules';

type Etat = 'saisie' | 'envoi' | 'envoye' | 'erreur';

@Component({
  selector: 'rf-demo-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './demo-page.html',
})
export class DemoPage {
  private http = inject(HttpClient);
  private fb = inject(FormBuilder);

  protected readonly site = SITE;
  protected readonly modules = MODULE_ORDER.map((k) => MODULES[k]);
  protected readonly email = EMAIL;
  protected readonly etat = signal<Etat>('saisie');
  protected readonly tente = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    nom: ['', [Validators.required, Validators.maxLength(120)]],
    societe: ['', [Validators.required, Validators.maxLength(160)]],
    telephone: ['', [Validators.required, Validators.pattern(/^[+0-9 ().-]{8,20}$/)]],
    email: ['', [Validators.email, Validators.maxLength(160)]],
    pays: ['Tunisie'],
    effectif: [''],
    finance: [false],
    crm: [false],
    rh: [false],
    message: ['', Validators.maxLength(2000)],
  });

  constructor() {
    const module = inject(ActivatedRoute).snapshot.queryParamMap.get('module') as ModuleKey | null;
    if (module && MODULE_ORDER.includes(module)) this.form.controls[module].setValue(true);
  }

  invalide(champ: 'nom' | 'societe' | 'telephone' | 'email'): boolean {
    const c = this.form.controls[champ];
    return c.invalid && (c.touched || this.tente());
  }

  async envoyer(): Promise<void> {
    this.tente.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      document.querySelector<HTMLElement>('.z-form .is-invalid')?.focus();
      return;
    }

    const v = this.form.getRawValue();
    const demande = {
      nom: v.nom.trim(),
      societe: v.societe.trim(),
      telephone: v.telephone.trim(),
      email: v.email.trim(),
      pays: v.pays,
      effectif: v.effectif,
      modules: MODULE_ORDER.filter((k) => v[k]),
      message: v.message.trim(),
      origine: 'site-commercial',
    };

    this.etat.set('envoi');

    if (SITE.demo.endpoint) {
      try {
        await firstValueFrom(this.http.post(SITE.demo.endpoint, demande));
        this.etat.set('envoye');
      } catch {
        this.etat.set('erreur');
      }
      return;
    }

    if (SITE.contact.email) {
      const corps = [
        `Nom : ${demande.nom}`,
        `Société : ${demande.societe}`,
        `Téléphone : ${demande.telephone}`,
        demande.email && `E-mail : ${demande.email}`,
        `Pays : ${demande.pays}`,
        demande.effectif && `Effectif : ${demande.effectif}`,
        `Modules : ${demande.modules.map((k) => MODULES[k].nom).join(', ') || 'à définir'}`,
        demande.message && `\n${demande.message}`,
      ]
        .filter(Boolean)
        .join('\n');
      const sujet = `Demande de démonstration — ${demande.societe}`;
      window.location.href = `mailto:${SITE.contact.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
      this.etat.set('envoye');
      return;
    }

    console.warn('Demande de démonstration : ni SITE.demo.endpoint ni SITE.contact.email ne sont configurés.');
    this.etat.set('erreur');
  }
}
