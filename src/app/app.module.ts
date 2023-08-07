import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameChoiceComponent} from "./components/game-choice/game-choice.component";
import {ButtonComponent} from "./components/ui/button/button.component";

@NgModule({
    declarations: [
        AppComponent,
        GameChoiceComponent,
        ButtonComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
