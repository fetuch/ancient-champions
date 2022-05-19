import { Injectable } from '@angular/core';
import { BattleLogService } from './battle-log.service';
import { Champion } from './champion';
import { Pantheon } from './pantheon';
import { Team } from './team';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  opponents?: Team[];
  rounds: number = 10;

  constructor(private battleLogService: BattleLogService) {}

  createTemporaryTeam(pantheon: Pantheon): Team {
    const team = pantheon
      .champions!.sort(() => Math.random() - 0.5)
      .slice(0, 3);

    this.battleLogService.add('Opponent team has been selected.');

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

  start(opponents: Team[]): void {
    this.opponents = opponents;
    this.battleLogService.add('So it has begun!');

    while (this.rounds > 0 && this.areTeamsAlive()) {
      this.battleLogService.add('Round');
      this.rounds--;
      this.playARound();
    }

    this.battleLogService.add('Finish');

    const summary = this.opponents!.reduce(
      (total: Champion[], current: Team) => [...total, ...current.members],
      []
    ).forEach((champion) => {
      this.battleLogService.add(
        `${champion.name} [${champion.pantheon}] HP ${champion.hp}`
      );
    });
  }

  playARound(): void {
    // determine the order of the movements of each individual champion
    const champions = this.orderChampions();

    champions.forEach((champion) => {
      const opponent = this.pickLivingOpponent(
        champions.filter((member) => member.pantheon !== champion.pantheon)
      );

      if (opponent) {
        opponent.hp -= champion.attack;

        this.battleLogService.add(
          `${champion.name} [${champion.pantheon}] damages ${opponent.name} [${opponent.pantheon}] for ${champion.attack}hp, Current ${opponent.name}'s HP: ${opponent.hp}`
        );
      }
    });
  }

  /**
   * Determines the order of movements.
   * Returns randomly sorted lifing champions.
   */
  orderChampions(): Champion[] {
    const list = this.opponents!.reduce(
      (total: Champion[], current: Team) => [...total, ...current.members],
      []
    )
      .filter((champion) => champion.hp > 0)
      .sort(() => Math.random() - 0.5);

    return list;
  }

  /** Checks if each team has at least one member with more than 0hp */
  areTeamsAlive(): boolean {
    return this.opponents!.every((team) =>
      team.members.some((member) => member.hp > 0)
    );
  }

  /** Randomly pick living opponent */
  pickLivingOpponent(champions: Champion[]): Champion | null {
    return (
      champions
        .sort(() => Math.random() - 0.5)
        .find((champion) => champion.hp > 0) ?? null
    );
  }
}
