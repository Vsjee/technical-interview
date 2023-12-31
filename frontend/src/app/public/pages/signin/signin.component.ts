import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { privateRoutes, publicRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackBarService } from 'src/app/services/snackBar/snack-bar.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  publicRoutes = publicRoutes;
  hide: boolean = true;

  constructor(
    private router: Router,
    public auth: AuthService,
    private _snack: SnackBarService
  ) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }

  logIn() {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.auth
        .logIn(email, password)
        .then(() => {
          this._snack.openSnackBar('Ingresaste');
          this.router.navigate([`${privateRoutes.DASHBOARD}`]);
        })
        .catch((err) => {
          console.error(err);
          this._snack.openSnackBar('Error al intentar ingresar');
        });
    } else {
      this.form.markAllAsTouched();
      this._snack.openSnackBar('Error datos invalidos');
    }
  }
}
