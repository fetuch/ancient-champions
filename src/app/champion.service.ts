import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Champion } from './champion';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private championsUrl = 'api/champions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championsUrl);
  }

  getChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;

    return this.http.get<Champion>(url);
  }

  /** POST: add a new champion to the server */
  addChampion(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(
      this.championsUrl,
      champion,
      this.httpOptions
    );
  }

  /** PUT: update the champion on the server */
  updateChampion(champion: Champion): Observable<any> {
    return this.http.put(this.championsUrl, champion, this.httpOptions);
  }

  /** DELETE: delete the champion from the server */
  deleteChampion(id: number): Observable<Champion> {
    const url = `${this.championsUrl}/${id}`;

    return this.http.delete<Champion>(url, this.httpOptions);
  }

  /* GET champions whose name contains search term */
  searchChampions(term: string): Observable<Champion[]> {
    return this.http.get<Champion[]>(
      `${this.championsUrl}/?name=${term.trim()}`
    );
  }
}
