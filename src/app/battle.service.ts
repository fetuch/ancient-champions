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
  champions: Champion[] = [];
  currentChampion?: Champion;
  currentChampionIndex: number = 0;
  delayMiliseconds: number = 300;

  constructor(private battleLogService: BattleLogService) {}

  init(opponents: Team[]): void {
    this.opponents = opponents;

    // Recursive call untill end of game
    this.playNextRound();
  }

  async playNextRound() {
    await this.currentRound();
    this.rounds--;

    if (this.rounds > 0 && this.areTeamsAlive()) {
      this.log('Next round');
      await this.playNextRound();
    } else {
      //exit game
      this.displaySummary();
    }
  }

  async currentRound(): Promise<void> {
    // determine the order of the movements of each individual champion
    this.champions = this.orderChampions();

    //all champions should make their move
    await this.championTurn(this.champions[this.currentChampionIndex]);

    this.currentChampionIndex = 0;
  }

  async championTurn(champion: Champion): Promise<void> {
    await this.delay(this.delayMiliseconds);

    const opponent = this.pickLivingOpponent(
      this.champions.filter((item) => item.pantheon !== champion.pantheon)
    );

    if (opponent && champion.hp > 0) {
      const damage =
        champion.attack - opponent.defence > 0
          ? champion.attack - opponent.defence
          : 0;

      opponent.hp -= damage;

      this.log(
        `${champion.name} attacks ${opponent.name} for ${damage}dmg (${opponent.defence} negated). `
      );

      if (opponent.hp <= 0) {
        this.log(`${opponent.name} dies.`);
      }
    }

    this.currentChampionIndex++;
    if (this.currentChampionIndex < this.champions.length) {
      await this.championTurn(this.champions[this.currentChampionIndex]);
    }
  }

  displaySummary(): void {
    const winningTeam = this.opponents?.find((team) =>
      team.members.some((member) => member.hp > 0)
    );
    this.log(`Team ${winningTeam?.members[0].pantheon} wins!!!`);
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

  createTemporaryTeam(pantheon: Pantheon): Team {
    const team = pantheon
      .champions!.sort(() => Math.random() - 0.5)
      .slice(0, 3);

    this.log('Opponent team has been selected.');

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

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /** Log a BattleService message with the BattleLogService */
  private log(message: string) {
    this.battleLogService.add(message);
  }
}
