import { Component } from '@angular/core';

interface menuItem {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Ancient Champions';
  menuOppened: boolean = true;
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
      link: '/statitics',
      name: 'Statistics',
      exact: false,
    },
  ];
}
