import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ITeams } from 'src/app/interfaces';
import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { Router } from '@angular/router';
import { privateRoutes } from 'src/app/models';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    DashboardRoutingModule,
    MatButtonModule,
  ],
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.scss'],
})
export class TeamsTableComponent {
  @Input() teams!: ITeams[];

  screenWidth: number = window.innerWidth;

  displayedColumns: string[] = [
    'position',
    'name',
    'country',
    'founded',
    'stadium',
    'info',
    'delete',
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.screenWidth = event.target.innerWidth;
  }

  constructor(private router: Router, private dialog: MatDialog) {}

  navigate(id: string) {
    this.router.navigate([`${privateRoutes.DASHBOARD}/${id}`]);
  }

  navigateMobile(id: string) {
    this.router.navigate([`${privateRoutes.MDASHBOARD}/${id}`]);
  }

  openDialog(id: string) {
    const dialogConf = new MatDialogConfig();

    dialogConf.disableClose = true;
    dialogConf.autoFocus = true;
    dialogConf.data = {
      id: id,
    };

    const dialogRef = this.dialog.open(DeleteItemComponent, dialogConf);
  }
}
