import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { privateRoutes, publicRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
    },
    this.validator.passwordMatch('password', 'confirmPassword')
  );

  publicRoutes = publicRoutes;
  hide: boolean = true;

  constructor(
    private router: Router,
    private validator: ValidatorService,
    public auth: AuthService
  ) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

  signIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .register(email, password)
        .then(() => this.router.navigate([`${privateRoutes.DASHBOARD}`]))
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
