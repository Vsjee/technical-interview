import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ITeams } from 'src/app/interfaces';
import { SnackBarService } from 'src/app/services/snackBar/snack-bar.service';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  selector: 'app-add-new-team',
  templateUrl: './add-new-team.component.html',
  styleUrls: ['./add-new-team.component.scss'],
})
export class AddNewTeamComponent {
  form = new FormGroup({
    teamId: new FormControl('', Validators.required),
    teamName: new FormControl('', Validators.required),
    teamCountry: new FormControl('', Validators.required),
    teamFounded: new FormControl('', Validators.required),
    teamNational: new FormControl('', Validators.required),
    teamLogo: new FormControl('', Validators.required),
    venueId: new FormControl('', Validators.required),
    venueName: new FormControl('', Validators.required),
    venueAddress: new FormControl('', Validators.required),
    venueCity: new FormControl('', Validators.required),
    venueCapacity: new FormControl('', Validators.required),
    venueSurface: new FormControl('', Validators.required),
    venueImage: new FormControl('', Validators.required),
  });

  constructor(private teams: TeamsService, private _snack: SnackBarService) {}

  async onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value.teamId);
      console.log(this.form.value.teamNational);

      let isNational = /true/.test(this.form.value.teamNational!);

      const team: ITeams = {
        team: {
          id: Number(this.form.value.teamId)!,
          name: this.form.value.teamName!,
          country: this.form.value.teamCountry!,
          founded: Number(this.form.value.teamFounded)!,
          national: isNational!,
          logo: this.form.value.teamLogo!,
        },
        venue: {
          id: Number(this.form.value.venueId)!,
          name: this.form.value.venueName!,
          address: this.form.value.venueAddress!,
          city: this.form.value.venueCity!,
          capacity: Number(this.form.value.venueCapacity)!,
          surface: this.form.value.venueSurface!,
          image: this.form.value.venueImage!,
        },
      };

      const res = await this.teams.create(team);
      this._snack.openSnackBar('Registro exitoso');
      console.log(res);
    } else {
      this._snack.openSnackBar('Datos invalidos');
    }
  }
}
