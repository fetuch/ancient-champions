import { Injectable } from '@angular/core';
import { BattleLogService } from './battle-log.service';
import { Champion } from '../champion';
import { Team } from '../team';
import { Log } from '../log';
import { BehaviorSubject, Observable } from 'rxjs';
import { TeamService } from './team.service';
import { ChampionService } from './champion.service';

@Injectable({
  providedIn: 'root',
})
export class BattleService {
  opponents: Team[] = [];
  rounds: number = 10;
  champions: Champion[] = [];
  currentChampion?: Champion;
  currentChampionIndex: number = 0;
  delayMiliseconds: number = 300;

  private subject: BehaviorSubject<Team[]>;

  constructor(
    private battleLogService: BattleLogService,
    private teamService: TeamService,
    private championService: ChampionService
  ) {
    this.subject = new BehaviorSubject(this.opponents);
  }

  init(): void {
    this.resetToDefaults();

    // Recursive call untill end of game
    this.playNextRound();
  }

  resetToDefaults(): void {
    this.rounds = 10;
  }

  async playNextRound() {
    await this.currentRound();
    this.rounds--;

    if (this.rounds > 0 && this.areTeamsAlive()) {
      this.log({
        message: 'Next round.',
      });
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

      if (opponent.hp < 0) opponent.hp = 0;

      this.log({
        avatar: champion.avatar,
        name: champion.name,
        message: `${champion.name} attacks ${opponent.name} for ${damage}dmg (${opponent.defence} negated).`,
      });

      if (opponent.hp <= 0) {
        this.log({
          message: `${opponent.name} dies.`,
        });
      }
    }

    this.currentChampionIndex++;
    if (this.currentChampionIndex < this.champions.length) {
      await this.championTurn(this.champions[this.currentChampionIndex]);
    }
  }

  displaySummary(): void {
    const winningTeam = this.opponents.find((team) =>
      team.members.some((member) => member.hp > 0)
    );
    this.log({
      message: `Team ${winningTeam?.members[0].pantheon} wins!!!`,
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

  prepareOpponents(team: Team) {
    this.championService.getChampions().subscribe((champions) => {
      // get champions from pantheons different than team pantheon
      const availableChampions = champions.filter(
        (champion) => champion.pantheon !== team.members[0].pantheon
      );

      // pick opposite pantheon
      const oppositePantheon = availableChampions.sort(
        () => Math.random() - 0.5
      )[0].pantheon;

      // select opposite team - three champions randomly taken from selected pantheon
      const members = champions
        .filter((champion) => champion.pantheon === oppositePantheon)
        .sort((a, b) => Math.random() - 0.5)
        .slice(0, 3);

      const opponents: Team[] = [team, { members } as Team];
      this.opponents = opponents;
      this.log({
        message: 'Opponent team has been selected.',
      });
      this.notify();
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /** Log a BattleService message with the BattleLogService */
  private log(log: Log) {
    this.battleLogService.add(log);
  }

  public getOpponents(): Observable<Team[]> {
    return this.subject.asObservable();
  }

  private notify(): void {
    this.subject.next(this.opponents);
  }
}
