import { Route } from '@angular/router';
import { ForgotPassword } from './forgot-password/forgot-password';
import { Signin } from './signin/signin';
import { Signup } from './signup/signup';

export const AUTH_ROUTES: Route[] = [
  { path: 'sign-in', component: Signin, data: { title: 'Sign In' } },
  { path: 'sign-up', component: Signup, data: { title: 'Sign Up' } },
  {
    path: 'forgot-password',
    component: ForgotPassword,
    data: { title: 'Forgot Password' },
  },
];
