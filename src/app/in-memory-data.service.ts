import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pantheon } from './pantheon';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { PANTHEONS } from './mock-pantheons';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const champions: Champion[] = [...CHAMPIONS];

    const pantheons: Pantheon[] = [...PANTHEONS].map((pantheon) => {
      return {
        ...pantheon,
        champions: champions.filter(
          (champion) => champion.pantheon === pantheon.name
        ),
      };
    });

    return { pantheons };
  }
}
