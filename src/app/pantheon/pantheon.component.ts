import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';

@Component({
  selector: 'app-pantheon',
  templateUrl: './pantheon.component.html',
  styleUrls: ['./pantheon.component.sass'],
})
export class PantheonComponent implements OnInit {
  pantheon?: Pantheon;

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
}
