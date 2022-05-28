import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleLogService } from '../../services/battle-log.service';
import { BattleService } from '../../services/battle.service';
import { ChampionService } from '../../services/champion.service';
import { PantheonService } from '../../services/pantheon.service';

import { Team } from '../../team';
import { TeamService } from '../../services/team.service';

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
    private championService: ChampionService,
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

        this.championService.getChampions().subscribe((champions) => {
          randomPantheon.champions = champions.filter(
            (champion) => champion.pantheon === randomPantheon.name
          );

          // pick randomly 3 champions and create an opponent team
          const opponentTeam =
            this.battleService.createTemporaryTeam(randomPantheon);

          this.opponents = [...opponents, opponentTeam];
        });
      });
    });
  }

  startTheBattle(): void {
    this.startDisabled = true;

    this.battleService.init(this.opponents);
  }
}
