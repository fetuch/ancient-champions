import { Injectable } from '@angular/core';
import { Log } from './log';

@Injectable({
  providedIn: 'root',
})
export class BattleLogService {
  logs: Log[] = [];

  add(log: Log) {
    this.logs.unshift(log);
  }

  clear(): void {
    this.logs = [];
  }
}
