import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantheonComponent } from './pantheon/pantheon.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  { path: '', component: PantheonsComponent },
  { path: 'pantheons/:id', component: PantheonComponent },
  { path: 'battle/:id', component: BattleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
