import { Component, OnInit } from '@angular/core';

interface Feature {
  name: string;
  description: string;
}

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.sass'],
})
export class FeatureListComponent implements OnInit {
  features: Feature[] = [
    {
      name: 'Responsive design',
      description:
        'Pure CSS (SASS) and Tailwind to make the look neat and clean on all screens.',
    },
    {
      name: 'Router based navigation',
      description:
        'There are few different pages with content and game mechanics.',
    },
    {
      name: 'Crud operations',
      description:
        'Gather the team from default Champions or create and manage totally new ones.',
    },
    {
      name: 'Game mechanics',
      description:
        'Based on Champions stats and abilities complete the team and battle the opponent.',
    },
    {
      name: 'Tests',
      description:
        'E2e and unit test to assure that the flow of an application is performing as designed from start to finish.',
    },
    {
      name: 'Forms',
      description: 'Template-driven form used to create and update Champions.',
    },
    {
      name: 'Stats & charts',
      description:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
    {
      name: 'Need one more',
      description:
        'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
