import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Champion } from '../champion';
import { ChampionService } from '../champion.service';
import { baseHP, baseAttack, baseDefence, baseImgUrl } from '../mock-champions';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-champion-form',
  templateUrl: './champion-form.component.html',
  styleUrls: ['./champion-form.component.sass'],
})
export class ChampionFormComponent implements OnInit {
  pantheons?: Pantheon[];
  model = {
    hp: baseHP,
    attack: baseAttack,
    defence: baseDefence,
  } as Champion;

  images: string[] = [
    `${baseImgUrl}/poseidon.jpg`,
    `${baseImgUrl}/hephaestus.jpg`,
    `${baseImgUrl}/ganesha.jpg`,
  ];

  minHp: number = baseHP;
  minAttack: number = baseAttack;
  minDefence: number = baseDefence;
  additionalPoints: number = 8;
  freePoints: number = 8;

  constructor(
    private router: Router,
    private pantheonService: PantheonService,
    private championService: ChampionService
  ) {}

  ngOnInit(): void {
    this.getPantheons();
  }

  getPantheons(): void {
    this.pantheonService
      .getPantheons()
      .subscribe((pantheons) => (this.pantheons = pantheons));
  }

  onSubmit() {
    this.championService.addChampion(this.model).subscribe((champion) => {
      const pantheon = this.pantheons?.find(
        (pantheon) => pantheon.name === champion.pantheon
      );

      if (pantheon) {
        pantheon.champions?.push(champion);

        this.pantheonService.updatePantheon(pantheon).subscribe(() => {
          this.router.navigate([`/pantheons/${pantheon.id}`]);
        });
      }
    });
  }

  onStatChange() {
    this.freePoints =
      this.minHp +
      this.minAttack +
      this.minDefence +
      this.additionalPoints -
      (this.model.hp + this.model.attack + this.model.defence);
  }

  onSelectAvatar(avatar: string): void {
    this.model.avatar = avatar;
  }
}
