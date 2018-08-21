import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { ChoicesComponent } from './choices/choices.component';
import { HomeComponent } from './home/home.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    ChoicesComponent,
    HomeComponent,
    ScenarioComponent,
    PlayerDetailsComponent    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
