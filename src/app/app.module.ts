import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { RoomComponent } from './room/room.component';
import { HeroComponent } from './hero/hero.component';
import { CardStackComponent } from './card-stack/card-stack.component';
import { HighScoresComponent } from './high-scores/high-scores.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    RoomComponent,
    HeroComponent,
    CardStackComponent,
    HighScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
