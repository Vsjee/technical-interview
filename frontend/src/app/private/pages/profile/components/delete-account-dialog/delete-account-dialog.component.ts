import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  selector: 'app-delete-account-dialog',
  templateUrl: './delete-account-dialog.component.html',
  styleUrls: ['./delete-account-dialog.component.scss'],
})
export class DeleteAccountDialogComponent {
  user$ = this.auth.currentActiveUser$.pipe(
    filter((state) => (state ? true : false))
  );

  constructor(public auth: AuthService) {}
}
