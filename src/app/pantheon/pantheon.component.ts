import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../champion';
import { Pantheon } from '../pantheon';
import { PantheonService } from '../pantheon.service';
import { Team } from '../team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-pantheon',
  templateUrl: './pantheon.component.html',
  styleUrls: ['./pantheon.component.sass'],
})
export class PantheonComponent implements OnInit {
  pantheon?: Pantheon;
  selectedChampions: Champion[] = [];
  requiredChampions: number = 3;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pantheonService: PantheonService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.getPantheon();
  }

  getPantheon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pantheonService
      .getPantheon(id)
      .subscribe((pantheon) => (this.pantheon = pantheon));
  }

  toggleSelectedChampion(champion: Champion): void {
    if (this.selectedChampions.includes(champion)) {
      this.removeChampion(champion);
    } else {
      if (this.selectedChampions.length === this.requiredChampions) {
        //cannot add more, notify user
      } else {
        this.addChampion(champion);
      }
    }
  }

  addChampion(champion: Champion): void {
    this.selectedChampions = [...this.selectedChampions, champion];
  }

  removeChampion(champion: Champion): void {
    this.selectedChampions = this.selectedChampions.filter(
      (item) => item !== champion
    );
  }

  confirmTheTeamSquad(): void {
    const members = this.selectedChampions;

    this.teamService.registerTeam({ members } as Team).subscribe((team) => {
      this.router.navigate([`/battle/${team.id}`]);
    });
  }
}
