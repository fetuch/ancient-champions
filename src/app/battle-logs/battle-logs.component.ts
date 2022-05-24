import { Component, OnInit } from '@angular/core';
import { BattleLogService } from '../battle-log.service';

@Component({
  selector: 'app-battle-logs',
  templateUrl: './battle-logs.component.html',
  styleUrls: ['./battle-logs.component.sass'],
})
export class BattleLogsComponent implements OnInit {
  title: string = 'Battle Log';

  constructor(public battleLogService: BattleLogService) {}

  ngOnInit(): void {}
}
