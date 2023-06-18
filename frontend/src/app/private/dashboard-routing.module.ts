import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TeamInfoComponent } from './pages/team-info/team-info.component';
import { TeamInfoMobileComponent } from './pages/team-info-mobile/team-info-mobile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: ':teamInfo',
            component: TeamInfoComponent,
          },
        ],
      },
      {
        path: 'dashboard/info/:teamInfo',
        component: TeamInfoMobileComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
