import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ITeams } from 'src/app/interfaces';
import { DashboardRoutingModule } from '../../dashboard-routing.module';
import { Router } from '@angular/router';
import { privateRoutes } from 'src/app/models';

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, DashboardRoutingModule],
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
  ];

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.screenWidth = event.target.innerWidth;
  }

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigate([`${privateRoutes.DASHBOARD}/${id}`]);
  }

  navigateMobile(id: string) {
    this.router.navigate([`${privateRoutes.MDASHBOARD}/${id}`]);
  }
}
