import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {
  HandleError,
  HttpErrorHandlerService,
} from '../services/http-error-handler.service';

import { Champion } from '../champion';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  championsUrl = 'api/champions';
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

  getChampions(): Observable<Champion[]> {
    return this.http
      .get<Champion[]>(this.championsUrl)
      .pipe(catchError(this.handleError<Champion[]>('getChampions', [])));
  }

  getChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;

    return this.http
      .get<Champion>(url)
      .pipe(catchError(this.handleError<Champion>('getChampion')));
  }

  addChampion(champion: Champion): Observable<Champion> {
    return this.http
      .post<Champion>(this.championsUrl, champion, this.httpOptions)
      .pipe(catchError(this.handleError<Champion>('addChampion', champion)));
  }

  updateChampion(champion: Champion): Observable<any> {
    return this.http
      .put(this.championsUrl, champion, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updateChampion', champion)));
  }

  deleteChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;

    return this.http
      .delete<Champion>(url, this.httpOptions)
      .pipe(catchError(this.handleError<Champion>('deleteChampion')));
  }

  searchChampions(term: string): Observable<Champion[]> {
    return this.http
      .get<Champion[]>(`${this.championsUrl}/?name=${term.trim()}`)
      .pipe(catchError(this.handleError<Champion[]>('searchChampions', [])));
  }
}
