import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private location: Location,
    private pantheonService: PantheonService,
    private championService: ChampionService
  ) {}

  ngOnInit(): void {
    this.getPantheons();

    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) this.getChampion(id);
  }

  getChampion(id: number) {
    this.championService.getChampion(id).subscribe((champion) => {
      // this.champion = champion;

      this.model = champion;

      if (!this.images.includes(champion.avatar)) {
        this.images = [...this.images, champion.avatar];
      }

      this.onStatChange();
    });
  }

  getPantheons(): void {
    this.pantheonService
      .getPantheons()
      .subscribe((pantheons) => (this.pantheons = pantheons));
  }

  onSubmit() {
    this.model.id ? this.updateChampion() : this.saveChampion();
  }

  onStatChange() {
    this.freePoints =
      this.minHp +
      this.minAttack +
      this.minDefence +
      this.additionalPoints -
      (this.model.hp + this.model.attack + this.model.defence);
  }

  increaseStat(stat: string) {
    this.model[stat as keyof Champion]++;

    this.onStatChange();
  }

  decreaseStat(stat: string) {
    this.model[stat as keyof Champion]--;

    this.onStatChange();
  }

  onSelectAvatar(avatar: string): void {
    this.model.avatar = avatar;
  }

  saveChampion() {
    this.championService.addChampion(this.model).subscribe(() => {
      this.goBack();
    });
  }

  updateChampion() {
    this.championService.updateChampion(this.model).subscribe(() => {
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }
}
