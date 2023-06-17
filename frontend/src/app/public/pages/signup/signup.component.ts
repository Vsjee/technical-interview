import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { publicRoutes } from 'src/app/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  publicRoutes = publicRoutes;
  hide: boolean = true;

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
