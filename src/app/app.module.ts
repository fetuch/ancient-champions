import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PantheonsComponent } from './pantheons/pantheons.component';
import { PantheonDetailComponent } from './pantheon-detail/pantheon-detail.component';
import { PantheonComponent } from './pantheon/pantheon.component';

@NgModule({
  declarations: [
    AppComponent,
    PantheonsComponent,
    PantheonDetailComponent,
    PantheonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
