# AncientChampions

This project was created as a portfolio project presenting my knowledge of the frontend with particular emphasis on the angular framework. It was
generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Instalation guide

- clone the repo
- run npm install
- run ng serve
- Navigate to `http://localhost:4200/`

## Live example / demo

Visit `https://ancient-champions.punkgate.pl/`

## Project features

- Responsive design
- Router based navigation
- CRUD operations
- Game mecahnics
- Tests
- Forms
- Data tables
- State management

## The Game

It is a team vs team batle game.

There are default system generated champions with their base stats randomly tweaked. Each champion belongs to a group called pantheon. You can edit each champion and slightly modify its stats. You can also generate new one from scratch.

The player forms a squad of three champions from one pantheon. The system then selects the opposing team and the battle begins.

Each round, each champion chooses and attacks one live opponent.
The game continues until all members of one team are dead or for 10 rounds. The battle progres is displayed in the form of a battle log.
