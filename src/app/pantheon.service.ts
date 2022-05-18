import { Injectable } from '@angular/core';
import { Pantheon } from './pantheon';
import { PANTHEONS } from './mock-pantheons';
import { CHAMPIONS } from './mock-champions';

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
}
