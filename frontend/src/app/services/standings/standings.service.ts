import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStandings } from 'src/app/interfaces/standing.interface';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  baseUri: string = 'http://localhost:3000/api/standings';

  constructor(private http: HttpClient) {}

  getStandings(): Observable<IStandings[]> {
    return this.http.get<IStandings[]>(this.baseUri);
  }
}
