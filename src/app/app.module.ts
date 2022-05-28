import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { PantheonDetailComponent } from './pantheon-detail/pantheon-detail.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BattleComponent } from './battle/battle.component';
import { BattleLogsComponent } from './battle-logs/battle-logs.component';
import { BattleChampionDetailComponent } from './battle-champion-detail/battle-champion-detail.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { ChampionFormComponent } from './champion-form/champion-form.component';
import { ChampionsComponent } from './champions/champions.component';

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
