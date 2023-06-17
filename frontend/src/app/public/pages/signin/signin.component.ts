import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { publicRoutes } from 'src/app/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  publicRoutes = publicRoutes;
  hide: boolean = true;

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
