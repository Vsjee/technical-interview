import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { ITeams } from 'src/app/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  teams: ITeams[] = [];
  loading: boolean = true;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((data) => {
      this.teams = data;
      this.loading = false;
    });
  }
}
