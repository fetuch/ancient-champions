import { Injectable } from '@angular/core';
import { Pantheon } from './pantheon';
import { PANTHEONS } from './mock-pantheons';

@Injectable({
  providedIn: 'root',
})
export class PantheonService {
  constructor() {}

  getPantheons(): Pantheon[] {
    return PANTHEONS;
  }
}
