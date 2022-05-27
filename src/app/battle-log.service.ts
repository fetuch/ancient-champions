import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Log } from './log';

@Injectable({
  providedIn: 'root',
})
export class BattleLogService {
  private logs: Log[] = [];

  private subject: BehaviorSubject<Log[]>;

  constructor() {
    this.subject = new BehaviorSubject(this.logs);
  }

  // BehaviorSubject is an Observable and Observer.
  public getLogs(): Observable<Log[]> {
    return this.subject.asObservable();
  }

  add(log: Log) {
    this.logs = [log, ...this.logs];
    this.notify();
  }

  clear(): void {
    this.logs = [];
    this.notify();
  }

  private notify(): void {
    this.subject.next(this.logs);
  }
}
