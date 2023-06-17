import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  GoogleAuthProvider,
  User,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { privateRoutes, publicRoutes } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentActiveUser$ = authState(this.afAuth);

  constructor(
    public afAuth: Auth,
    private afGoogleAuth: AngularFireAuth,
    private router: Router
  ) {}

  googleAuth() {
    return this.authLoginGoogle(new GoogleAuthProvider());
  }

  authLoginGoogle(provider: GoogleAuthProvider) {
    return this.afGoogleAuth
      .signInWithPopup(provider)
      .then(() => {
        console.log('success');
        this.router.navigate([`${privateRoutes.DASHBOARD}`]);
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }

  async register(email: string | any, password: string | any) {
    const user = await createUserWithEmailAndPassword(
      this.afAuth,
      email,
      password
    );
    return await signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logIn(email: string | any, password: string | any) {
    return signInWithEmailAndPassword(this.afAuth, email, password);
  }

  logout() {
    return signOut(this.afAuth);
  }

  deleteAccount(user$: User) {
    user$
      .delete()
      .then(() => {
        alert('Usuario borrado con exito!');
        this.router.navigate([`${publicRoutes.HOME}`]);
      })
      .catch((error: Error) => {
        console.error(error);
        alert(
          'Algo sucedio, Porfavor inicia sesión de nuevo e intenta otra vez.'
        );
      });
  }
}
