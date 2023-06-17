import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./public/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./private/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
