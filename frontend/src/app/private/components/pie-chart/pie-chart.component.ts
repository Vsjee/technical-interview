import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  standalone: true,
  imports: [ChartModule],
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  labelVenueName: string[] = [];
  datasetVenueCapacity: number[] = [];
  options: any;
  data: any;

  constructor(private teamsService: TeamsService) {}

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.teamsService.getAllTeams().subscribe((data) => {
      data.map((item) => {
        if (item.venue.name !== null && item.venue.capacity !== null) {
          this.labelVenueName.push(item.venue.name);
          this.datasetVenueCapacity.push(item.venue.capacity);
        }
      });

      this.data = {
        labels: this.labelVenueName,
        datasets: [
          {
            data: this.datasetVenueCapacity,
          },
        ],
      };
    });

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
      },
    };
  }
}
