import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { ITeams } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  baseUri: string = 'http://localhost:3000/api/teams';

  constructor(private http: HttpClient) {}

  getAllTeams(): Observable<ITeams[]> {
    return this.http.get<ITeams[]>(this.baseUri);
  }

  getTeamById(id: string): Observable<ITeams> {
    return this.http.get<ITeams>(`${this.baseUri}/${id}`);
  }

  create(team: ITeams): Promise<ITeams> {
    return firstValueFrom(this.http.post<ITeams>(this.baseUri, team));
  }
}
