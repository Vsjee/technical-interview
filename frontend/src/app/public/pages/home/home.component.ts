import { Component } from '@angular/core';
import {
  fadeInRightOnEnterAnimation,
  fadeInLeftOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInRightOnEnterAnimation(), fadeInLeftOnEnterAnimation()],
})
export class HomeComponent {}
