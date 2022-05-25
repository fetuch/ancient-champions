import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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
  champion?: Champion;

  model = {
    hp: baseHP,
    attack: baseAttack,
    defence: baseDefence,
  } as Champion;

  images: string[] = [
    `${baseImgUrl}/avatar-1.jpg`,
    `${baseImgUrl}/avatar-3.jpg`,
    `${baseImgUrl}/avatar-4.jpg`,
    `${baseImgUrl}/avatar-5.jpg`,
    `${baseImgUrl}/avatar-6.jpg`,
  ];

  minHp: number = baseHP;
  minAttack: number = baseAttack;
  minDefence: number = baseDefence;
  additionalPoints: number = 10;
  freePoints: number = 10;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private pantheonService: PantheonService,
    private championService: ChampionService
  ) {}

  ngOnInit(): void {
    this.getChampion();
    this.getPantheons();
  }

  getChampion() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.championService.getChampion(id).subscribe((champion) => {
        this.champion = champion;

        this.model = champion;

        if (!this.images.includes(champion.avatar)) {
          this.images = [...this.images, champion.avatar];
        }

        this.onStatChange();
      });
    }
  }

  getPantheons(): void {
    this.pantheonService
      .getPantheons()
      .subscribe((pantheons) => (this.pantheons = pantheons));
  }

  onSubmit() {
    if (this.champion) {
      this.updateChampion();
    } else {
      this.saveChampion();
    }
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

  saveChampion() {
    this.championService.addChampion(this.model).subscribe((champion) => {
      //update champion's pantheon list of champions
      const pantheon = this.pantheons?.find(
        (pantheon) => pantheon.name === champion.pantheon
      );

      if (pantheon) {
        pantheon.champions?.push(champion);

        this.pantheonService.updatePantheon(pantheon).subscribe(() => {
          this.goBack();
        });
      }
    });
  }

  updateChampion() {
    this.championService.updateChampion(this.model).subscribe(() => {
      //update champion's pantheon list of champions
      const pantheon = this.pantheons?.find(
        (pantheon) => pantheon.name === this.model.pantheon
      );

      if (pantheon) {
        const index = pantheon.champions!.findIndex(
          (champion) => champion.id === this.model.id
        );

        if (index !== -1) {
          pantheon.champions![index] = this.model;
        }

        this.pantheonService.updatePantheon(pantheon).subscribe(() => {
          this.goBack();
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
