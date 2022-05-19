import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { PantheonDetailComponent } from './pantheon-detail/pantheon-detail.component';
import { PantheonComponent } from './pantheon/pantheon.component';
import { InMemoryDataService } from './in-memory-data.service';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    PantheonsComponent,
    PantheonDetailComponent,
    PantheonComponent,
    BattleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
