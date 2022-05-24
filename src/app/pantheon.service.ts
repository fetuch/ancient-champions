import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Pantheon } from './pantheon';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PantheonService {
  private pantheonsUrl = 'api/pantheons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPantheons(): Observable<Pantheon[]> {
    return this.http
      .get<Pantheon[]>(this.pantheonsUrl)
      .pipe(catchError(this.handleError<Pantheon[]>('getPantheons', [])));
  }

  getPantheon(id: number): Observable<Pantheon> {
    const url = `${this.pantheonsUrl}/${id}`;
    return this.http
      .get<Pantheon>(url)
      .pipe(catchError(this.handleError<Pantheon>(`getPantheon id=${id}`)));
  }

  /** PUT: update the pantheon on the server */
  updatePantheon(pantheon: Pantheon): Observable<any> {
    return this.http
      .put(this.pantheonsUrl, pantheon, this.httpOptions)
      .pipe(catchError(this.handleError<any>('updatePantheon')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
