import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../store/authentication/authentication.actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signin.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Eager,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Signin {
  signinForm!: UntypedFormGroup;
  submitted: boolean = false;
  passwordType: boolean = true;

  public fb = inject(UntypedFormBuilder);
  store = inject(Store);

  constructor() {
    this.signinForm = this.fb.group({
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }
  get form() {
    return this.signinForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.signinForm.valid) {
      const email = this.form['email'].value; // Get the username from the form
      const password = this.form['password'].value; // Get the password from the form

      // Login Api
      this.store.dispatch(login({ email: email, password: password }));
    }
  }

  changeType() {
    this.passwordType = !this.passwordType;
  }

  currentYear: number = new Date().getFullYear();
}
