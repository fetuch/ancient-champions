import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { BattleComponent } from './battle/battle.component';
import { ChampionFormComponent } from './champion-form/champion-form.component';
import { ChampionsComponent } from './champions/champions.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pantheons', component: PantheonsComponent },
  { path: 'pantheons/:id', component: PantheonComponent },
  { path: 'battle/:id', component: BattleComponent },
  { path: 'champions', component: ChampionsComponent },
  { path: 'champions/create', component: ChampionFormComponent },
  { path: 'champions/:id/edit', component: ChampionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
