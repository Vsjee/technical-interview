import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeamInfoComponent } from './pages/team-info/team-info.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, TeamInfoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TeamsTableComponent,
    MatIconModule,
  ],
})
export class DashboardModule {}
