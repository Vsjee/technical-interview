import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IStandings } from 'src/app/interfaces/standing.interface';
import { StandingsService } from 'src/app/services/standings/standings.service';

@Component({
  standalone: true,
  imports: [MatTableModule],
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss'],
})
export class StandingsTableComponent implements OnInit {
  standingsInfo: IStandings[] = [];

  displayedColumns: string[] = [
    'position',
    'name',
    'played',
    'wins',
    'draws',
    'loses',
    'goalsFor',
    'goalsAgainst',
    'points',
  ];

  constructor(private standings: StandingsService) {}

  ngOnInit(): void {
    this.standings.getStandings().subscribe((data) => {
      this.standingsInfo = data;
    });
  }
}
