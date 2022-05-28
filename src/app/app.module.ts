import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantheonsComponent } from './components/pantheons/pantheons.component';
import { PantheonDetailComponent } from './components/pantheon-detail/pantheon-detail.component';
import { PantheonComponent } from './components/pantheon/pantheon.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BattleComponent } from './components/battle/battle.component';
import { BattleLogsComponent } from './components/battle-logs/battle-logs.component';
import { BattleChampionDetailComponent } from './components/battle-champion-detail/battle-champion-detail.component';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { ChampionFormComponent } from './components/champion-form/champion-form.component';
import { ChampionsComponent } from './components/champions/champions.component';

@NgModule({
  declarations: [
    AppComponent,
    PantheonsComponent,
    PantheonDetailComponent,
    PantheonComponent,
    BattleComponent,
    BattleLogsComponent,
    BattleChampionDetailComponent,
    ChampionDetailComponent,
    HomepageComponent,
    NavigationComponent,
    FeatureListComponent,
    ChampionFormComponent,
    ChampionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
