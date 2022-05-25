import { Component, OnInit } from '@angular/core';
import {
  Event as NavigationEvent,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs/operators';

interface menuItem {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  menuOppened: boolean = false;
  menuItems: menuItem[] = [
    {
      link: '/',
      name: 'Home',
      exact: true,
    },
    {
      link: '/pantheons',
      name: 'Pantheons',
      exact: false,
    },
    {
      link: '/champions',
      name: 'Champions',
      exact: false,
    },
  ];
  constructor(public router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((e: NavigationEvent) => {
        if (this.menuOppened) this.menuOppened = false;
      });
  }

  ngOnInit(): void {}
}
