import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BattleLogService } from '../services/battle-log.service';
import { Log } from '../log';

@Component({
  selector: 'app-battle-logs',
  templateUrl: './battle-logs.component.html',
  styleUrls: ['./battle-logs.component.sass'],
})
export class BattleLogsComponent implements OnInit {
  title: string = 'Battle Log';
  logs$!: Observable<Log[]>;

  constructor(private battleLogService: BattleLogService) {}

  ngOnInit(): void {
    this.logs$ = this.battleLogService.getLogs();
  }
}
