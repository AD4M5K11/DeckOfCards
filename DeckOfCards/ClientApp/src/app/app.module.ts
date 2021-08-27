import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CardGameComponent } from './card-game/card-game.component';

@NgModule({
  declarations: [
    AppComponent,
    // FetchDataComponent,
    CardGameComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: 'fetch-data', component: FetchDataComponent },
      { path: 'card-game', component: CardGameComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
