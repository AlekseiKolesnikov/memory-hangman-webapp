import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameChoiceComponent} from "./components/game-choice/game-choice.component";
import {ButtonComponent} from "./components/ui/button/button.component";
import {HangmanLevelsComponent} from "./components/hangman/hangman-levels/hangman-levels.component";
import {MemoryLevelsComponent} from "./components/memory/memory-levels/memory-levels.component";
import {ErrorScreenComponent} from "./components/error-screen/error-screen.component";
import {HangmanPlaygroundComponent} from "./components/hangman/hangman-playground/hangman-playground.component";

@NgModule({
  declarations: [
    AppComponent,
    GameChoiceComponent,
    ButtonComponent,
    HangmanLevelsComponent,
    MemoryLevelsComponent,
    HangmanPlaygroundComponent,
    ErrorScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
