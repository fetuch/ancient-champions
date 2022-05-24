import { Component, OnInit } from '@angular/core';
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

  constructor(private pantheonService: PantheonService) {}

  ngOnInit(): void {
    this.getPantheon();
  }

  getPantheon(): void {
    const id: number = Math.floor(Math.random() * 4 + 1);
    this.pantheonService.getPantheon(id).subscribe((pantheon) => {
      pantheon.champions = pantheon.champions
        ?.sort((a, b) => Math.random() - 0.5)
        .slice(0, 6);
      this.pantheon = pantheon;
    });
  }
}
