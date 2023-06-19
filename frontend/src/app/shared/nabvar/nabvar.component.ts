import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { privateRoutes, publicRoutes } from 'src/app/models';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AddNewTeamComponent } from '../add-new-team/add-new-team.component';

@Component({
  standalone: true,
  imports: [CommonModule, AppRoutingModule, MatIconModule, MatDialogModule],
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss'],
})
export class NabvarComponent {
  publicRoutes = publicRoutes;
  privateRoutes = privateRoutes;
  hiddeNavbar: boolean = false;
  changeNavContent: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    private dialog: MatDialog
  ) {
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

  openDialog() {
    const dialogConf = new MatDialogConfig();

    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;

    const dialogRef = this.dialog.open(AddNewTeamComponent, dialogConf);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
