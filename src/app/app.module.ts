import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { ChoicesComponent } from './choices/choices.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    ChoicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
