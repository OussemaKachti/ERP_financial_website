import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'contact-us1-contact-form',
  standalone: true,
  imports: [NgxTypedJsModule, FormsModule, ReactiveFormsModule,RouterLink],
  templateUrl: './contact-form.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class ContactForm {
  contactForm!: FormGroup;
  submitted = false;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  get form() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log('Form submitted:', this.contactForm.value);
  }
}
