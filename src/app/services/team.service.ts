import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {
  HandleError,
  HttpErrorHandlerService,
} from '../services/http-error-handler.service';

import { Team } from '../team';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsUrl = 'api/teams';
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = httpErrorHandler.createHandleError('ChampionService');
  }

  registerTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, this.httpOptions);
  }

  getTeam(id: number): Observable<Team> {
    const url = `${this.teamsUrl}/${id}`;

    return this.http
      .get<Team>(url)
      .pipe(catchError(this.handleError<Team>('getTeam')));
  }
}
