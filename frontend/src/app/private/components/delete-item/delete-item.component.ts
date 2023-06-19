import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TeamsService } from 'src/app/services/teams/teams.service';

interface Prop {
  id: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss'],
})
export class DeleteItemComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Prop,
    private teams: TeamsService
  ) {}

  async deleteById(id: string) {
    const res = await this.teams.deleteById(id);
    console.log(res);
  }
}
