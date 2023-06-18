import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  displayedColumns: string[] = [
    'position',
    'name',
    'country',
    'founded',
    'info',
  ];

  constructor(private router: Router) {}

  navigate(id: string) {
    this.router.navigate([`${privateRoutes.DASHBOARD}/${id}`]);
  }
}
