import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../champion';

@Component({
  selector: 'app-battle-champion-detail',
  templateUrl: './battle-champion-detail.component.html',
  styleUrls: ['./battle-champion-detail.component.sass'],
})
export class BattleChampionDetailComponent implements OnInit {
  @Input() champion?: Champion;

  constructor() {}

  ngOnInit(): void {}
}
