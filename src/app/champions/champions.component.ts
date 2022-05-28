import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

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
  showDeleteModal: boolean = false;
  deleteChampionId: number | null = null;
  private searchTerms = new Subject<string>();

  constructor(private championService: ChampionService) {}

  ngOnInit(): void {
    this.getChampions();

    this.searchTerms
      .pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.championService.searchChampions(term))
      )
      .subscribe((champions) => (this.champions = champions));
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

  search(term: string): void {
    this.searchTerms.next(term);
  }

  onDeleteChampion(id: number): void {
    this.deleteChampionId = id;
    this.showDeleteModal = true;
  }

  confirmDelete(): void {
    this.showDeleteModal = false;

    if (this.deleteChampionId) {
      this.champions = this.champions?.filter(
        (champion) => champion.id !== this.deleteChampionId
      );

      this.championService
        .deleteChampion(this.deleteChampionId)
        .subscribe(() => (this.deleteChampionId = null));
    }
  }
}
