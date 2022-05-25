import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Champion } from '../champion';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.sass'],
})
export class ChampionDetailComponent implements OnInit {
  @Input() champion?: Champion;
  @Input() selected?: boolean;
  @Input() banner?: string;
  @Output() itemEvent = new EventEmitter<Champion>();
  @Output() deleteEvent = new EventEmitter<Champion>();

  constructor() {}

  ngOnInit(): void {}

  toggleSelectedChampion(): void {
    this.itemEvent.emit(this.champion);
  }

  onDeleteChampion(): void {
    this.deleteEvent.emit(this.champion);
  }
}
