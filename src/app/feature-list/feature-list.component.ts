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
        'Mobile first aproach using pure CSS (SASS) and Tailwind to make the look neat and clean on all screens.',
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
        'Assure that the flow of an application is performing as designed from start to finish.',
    },
    {
      name: 'Forms',
      description: 'Template-driven form used to create and update Champions.',
    },
    {
      name: 'Datatables',
      description: 'Sortable and searchable datatable',
    },
    {
      name: 'State Management',
      description:
        'Passing data using Input/Output decorators and Event Emitters. Passing data using Shared Services.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
