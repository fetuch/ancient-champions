import { Component, OnInit } from '@angular/core';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-pantheons',
  templateUrl: './pantheons.component.html',
  styleUrls: ['./pantheons.component.sass'],
})
export class PantheonsComponent implements OnInit {
  title = 'Ancient Champions';
  pantheons: Pantheon[] = [];

  constructor(private pantheonService: PantheonService) {}

  ngOnInit(): void {
    this.getPantheons();
  }

  getPantheons(): void {
    this.pantheons = this.pantheonService.getPantheons();
  }
}
