import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  /** POST: add a new champion to the server */
  addChampion(champion: Champion): Observable<Champion> {
    return this.http.post<Champion>(
      this.championsUrl,
      champion,
      this.httpOptions
    );
  }
}
