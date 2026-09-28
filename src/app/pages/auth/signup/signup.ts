
import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class Signup {
  fieldTextType = false;
  signupForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, [Validators.requiredTrue]]
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.signupForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
      this.signupForm.reset();
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  currentYear: number = new Date().getFullYear();
}
