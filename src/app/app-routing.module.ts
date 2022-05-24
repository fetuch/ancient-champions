import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { BattleComponent } from './battle/battle.component';
import { ChampionFormComponent } from './champion-form/champion-form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'pantheons', component: PantheonsComponent },
  { path: 'pantheons/:id', component: PantheonComponent },
  { path: 'battle/:id', component: BattleComponent },
  { path: 'create-champion', component: ChampionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
