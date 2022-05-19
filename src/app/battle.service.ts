import { Injectable } from '@angular/core';
import { BattleLogService } from './battle-log.service';
import { Pantheon } from './pantheon';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  constructor(private battleLogService: BattleLogService) {}

  createTemporaryTeam(pantheon: Pantheon): Team {
    const team = pantheon
      .champions!.sort(() => Math.random() - 0.5)
      .slice(0, 3);

    this.battleLogService.add(
      'BattleService: Opponent team has been selected.'
    );

    return { members: team } as Team;
  }

  getAvailablePantheons(pantheons: Pantheon[], team: Team): Pantheon[] {
    return pantheons.filter(
      (pantheon) => pantheon.name !== team.members[0].pantheon
    );
  }

  getRandomPantheon(pantheons: Pantheon[]): Pantheon {
    return pantheons[Math.floor(Math.random() * pantheons.length)];
  }

  start(opponents: Team[] | undefined): void {
    this.battleLogService.add('BattleService: So it has begun!');
  }
}
