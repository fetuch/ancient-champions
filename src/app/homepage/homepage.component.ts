import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../champion.service';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
})
export class HomepageComponent implements OnInit {
  title: string = 'Ancient Champions';
  pantheon?: Pantheon;

  constructor(
    private pantheonService: PantheonService,
    private championService: ChampionService
  ) {}

  ngOnInit(): void {
    this.getPantheon();
  }

  getPantheon(): void {
    const id: number = Math.floor(Math.random() * 4 + 1);
    this.pantheonService.getPantheon(id).subscribe((pantheon) => {
      this.championService.getChampions().subscribe((champions) => {
        const pantheonChampions = champions.filter(
          (champion) => champion.pantheon === pantheon.name
        );

        pantheon.champions = pantheonChampions
          ?.sort((a, b) => Math.random() - 0.5)
          .slice(0, 6);
        this.pantheon = pantheon;
      });
    });
  }
}
