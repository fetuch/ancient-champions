import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pantheon } from './pantheon';
import { Champion } from './champion';
import { CHAMPIONS } from './mock-champions';
import { PANTHEONS } from './mock-pantheons';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const champions: Champion[] = CHAMPIONS;

    const pantheons: Pantheon[] = PANTHEONS;

    // default team
    const teams: Team[] = [
      {
        id: 1,
        members: champions.slice(0, 3),
      },
    ];

    return { pantheons, teams, champions };
  }

  genId<T extends Team | Champion>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id)) + 1 : 100;
  }
}
