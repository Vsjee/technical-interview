import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class HomeModule {}
