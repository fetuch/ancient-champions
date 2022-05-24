import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleLogService } from '../battle-log.service';
import { BattleService } from '../battle.service';
import { PantheonService } from '../pantheon.service';

import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.sass'],
})
export class BattleComponent implements OnInit {
  startDisabled: boolean = false;
  teamNotFound: boolean = false;
  opponents: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private pantheonService: PantheonService,
    private battleService: BattleService,
    private battleLogService: BattleLogService
  ) {}

  ngOnInit(): void {
    this.prepareBattleStage();
  }

  prepareBattleStage(): void {
    this.teamNotFound = false;
    this.startDisabled = false;
    this.battleLogService.clear();

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamService.getTeam(id).subscribe(
      (team) => {
        const opponents = [team];
        this.opponents = opponents;

        this.pantheonService.getPantheons().subscribe((pantheons) => {
          // get pantheons
          const availablePantheons = this.battleService.getAvailablePantheons(
            pantheons,
            team
          );

          // pick one of them
          const randomPantheon =
            this.battleService.getRandomPantheon(availablePantheons);

          // pick randomly 3 champions and create an opponent team
          const opponentTeam =
            this.battleService.createTemporaryTeam(randomPantheon);

          // simulate
          setTimeout(() => {
            this.opponents = [...opponents, opponentTeam];
          }, 1000);
        });
      },
      (error) => {
        if (error.status === 404) this.teamNotFound = true;
      }
    );
  }

  startTheBattle(): void {
    this.startDisabled = true;

    this.battleService.init(this.opponents);
  }
}
