import { Component, OnInit } from '@angular/core';
import { PANTHEONS } from '../mock-pantheons';

@Component({
  selector: 'app-pantheons',
  templateUrl: './pantheons.component.html',
  styleUrls: ['./pantheons.component.sass'],
})
export class PantheonsComponent implements OnInit {
  title = 'Ancient Champions';
  pantheons = PANTHEONS;

  constructor() {}

  ngOnInit(): void {}
}
