
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: ``,
})
export class ForgotPassword {
  submit: boolean = false;
  email: string = '';

  emailSubmit() {
    this.submit = true;
  }

  currentYear: number = new Date().getFullYear();
}
