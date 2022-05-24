import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  opponents: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private pantheonService: PantheonService,
    private battleService: BattleService
  ) {}

  ngOnInit(): void {
    this.prepareBattleStage();
  }

  prepareBattleStage(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.teamService.getTeam(id).subscribe((team) => {
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
    });
  }

  startTheBattle(): void {
    this.battleService.init(this.opponents!);
  }
}
