import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantheonComponent } from './pantheon/pantheon.component';
import { PantheonsComponent } from './pantheons/pantheons.component';

const routes: Routes = [
  { path: '', component: PantheonsComponent },
  { path: 'pantheons/:name', component: PantheonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
