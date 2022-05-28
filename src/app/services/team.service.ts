import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsUrl = 'api/teams';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  registerTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, this.httpOptions);
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;

    return this.http.get<Team>(url);
  }
}
