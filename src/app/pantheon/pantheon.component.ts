import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from '../champion';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-pantheon',
  templateUrl: './pantheon.component.html',
  styleUrls: ['./pantheon.component.sass'],
})
export class PantheonComponent implements OnInit {
  pantheon?: Pantheon;
  selectedChampions: Champion[] = [];
  requiredChampions: number = 3;

  constructor(
    private route: ActivatedRoute,
    private pantheonService: PantheonService
  ) {}

  ngOnInit(): void {
    this.getPantheon();
  }

  getPantheon(): void {
    const name = this.route.snapshot.paramMap.get('name')!;

    this.pantheonService
      .getPantheon(name)
      .subscribe((pantheon) => (this.pantheon = pantheon));
  }

  toggleSelectedChampion(champion: Champion): void {
    if (this.selectedChampions.includes(champion)) {
      this.removeChampion(champion);
    } else {
      if (this.selectedChampions.length === this.requiredChampions) {
        //cannot add more, notify user
      } else {
        this.addChampion(champion);
      }
    }
  }

  addChampion(champion: Champion): void {
    this.selectedChampions = [...this.selectedChampions, champion];
  }

  removeChampion(champion: Champion): void {
    this.selectedChampions = this.selectedChampions.filter(
      (item) => item !== champion
    );
  }

  startABattle(): void {
    // register team
    console.log(this.selectedChampions);
    // pick oponent team
    // start a battle
  }
}
