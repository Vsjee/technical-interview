import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ITeams } from 'src/app/interfaces';
import { privateRoutes } from 'src/app/models';
import { teamsModel } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss'],
})
export class TeamInfoComponent implements OnInit {
  teamInfo: ITeams = teamsModel;
  teamInfoId: string = '';

  constructor(
    private teams: TeamsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe(() => this.ngOnInit());
    this.initRoute();
  }

  initTeamInfo(id: string): void {
    this.teams.getTeamById(id).subscribe((data) => {
      this.teamInfo = data;
    });
  }

  initRoute(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.url) {
        const currUrl = event.url.split('/');
        this.teamInfoId = currUrl[currUrl.length - 1];
        this.initTeamInfo(this.teamInfoId);
      }
    });
  }

  navigate() {
    this.router.navigate([privateRoutes.DASHBOARD]);
  }

  ngOnInit(): void {
    this.initRoute();
  }
}
