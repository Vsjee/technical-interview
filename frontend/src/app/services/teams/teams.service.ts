import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
