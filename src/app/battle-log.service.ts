import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BattleLogService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }
}
