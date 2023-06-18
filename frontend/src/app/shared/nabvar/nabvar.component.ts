import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { privateRoutes, publicRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, AppRoutingModule, MatIconModule],
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
})
export class NabvarComponent {
  publicRoutes = publicRoutes;
  privateRoutes = privateRoutes;
  hiddeNavbar: boolean = false;
  changeNavContent: boolean = false;

  constructor(private router: Router, public auth: AuthService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const splitEventUrl = event.url.split('/')[1];

        if (
          event.url === this.publicRoutes.SIGNIN ||
          event.url === this.publicRoutes.SINGUP
        ) {
          this.hiddeNavbar = true;
        } else {
          this.hiddeNavbar = false;
        }

        if (splitEventUrl === 'private') {
          this.hiddeNavbar = true;
          this.changeNavContent = true;
        } else {
          this.changeNavContent = false;
        }
      }
    });
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
