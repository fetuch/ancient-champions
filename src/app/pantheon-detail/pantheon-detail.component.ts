import { Component, OnInit, Input } from '@angular/core';
import { Pantheon } from '../pantheon';

@Component({
  selector: 'app-pantheon-detail',
  templateUrl: './pantheon-detail.component.html',
  styleUrls: ['./pantheon-detail.component.sass'],
})
export class PantheonDetailComponent implements OnInit {
  @Input() pantheon?: Pantheon;

  constructor() {}

  ngOnInit(): void {}
}
