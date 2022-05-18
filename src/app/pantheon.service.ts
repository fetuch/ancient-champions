import { Injectable } from '@angular/core';
import { Pantheon } from './pantheon';
import { PANTHEONS } from './mock-pantheons';
import { CHAMPIONS } from './mock-champions';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PantheonService {
  constructor() {}

  getPantheons(): Pantheon[] {
    return PANTHEONS.map((pantheon) => {
      return {
        ...pantheon,
        champions: CHAMPIONS.filter(
          (champion) => champion.pantheon === pantheon.name
        ),
      };
    });
  }

  getPantheon(name: string): Observable<Pantheon> {
    const pantheon = PANTHEONS.find(
      (pantheon) => pantheon.name.toLowerCase() === name
    )!;

    return of({
      ...pantheon,
      champions: CHAMPIONS.filter(
        (champion) => champion.pantheon === pantheon.name
      ),
    });
  }
}
