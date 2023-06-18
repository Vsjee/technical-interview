import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeamInfoComponent } from './pages/team-info/team-info.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TeamInfoMobileComponent } from './pages/team-info-mobile/team-info-mobile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    TeamInfoComponent,
    TeamInfoMobileComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TeamsTableComponent,
    MatIconModule,
    PieChartComponent,
  ],
})
export class DashboardModule {}
