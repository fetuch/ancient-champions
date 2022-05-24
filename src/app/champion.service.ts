import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Champion } from './champion';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  private championsUrl = 'api/champions';

  constructor(private http: HttpClient) {}

  getChampions(): Observable<Champion[]> {
    return this.http.get<Champion[]>(this.championsUrl);
  }
}
