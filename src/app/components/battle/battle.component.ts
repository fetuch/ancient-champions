import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleLogService } from '../../services/battle-log.service';
import { BattleService } from '../../services/battle.service';
import { TeamService } from '../../services/team.service';

import { Team } from '../../team';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.sass'],
})
export class BattleComponent implements OnInit {
  opponents$: Observable<Team[]> = of();
  startDisabled: boolean = false;
  teamNotFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private battleService: BattleService,
    private teamService: TeamService,
    private battleLogService: BattleLogService
  ) {}

  ngOnInit(): void {
    this.prepareBattleStage();

    this.opponents$ = this.battleService.getOpponents();
  }

  prepareBattleStage(): void {
    this.teamNotFound = false;
    this.startDisabled = false;
    this.battleLogService.clear();

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamService.getTeam(id).subscribe((team) => {
      if (!Object.keys(team).length) {
        this.teamNotFound = true;
      } else {
        this.battleService.prepareOpponents(team);
      }
    });
  }

  startTheBattle(): void {
    this.startDisabled = true;

    this.battleService.init();
  }
}
