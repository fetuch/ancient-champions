import { Component, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.sass'],
})
export class ChampionsComponent implements OnInit {
  champions?: Champion[];
  sortColumn: string = 'name';
  sortDir: boolean = true;

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe((champions) => {
      this.champions = champions;

      this.sortChampions();
    });
  }

  sortChampions(): Champion[] {
    const champions = this.champions!.sort((a, b) => {
      if (this.sortDir) {
        return a[this.sortColumn as keyof Champion] <
          b[this.sortColumn as keyof Champion]
          ? -1
          : 1;
      } else {
        return a[this.sortColumn as keyof Champion] >
          b[this.sortColumn as keyof Champion]
          ? -1
          : 1;
      }
    });

    return champions;
  }

  sort(column: string) {
    if (this.sortColumn === column) this.sortDir = !this.sortDir;

    this.sortColumn = column;

    this.sortChampions();
  }
}
