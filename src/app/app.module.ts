import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GameChoiceComponent} from "./pages/game-choice/game-choice.component";
import {ButtonComponent} from "./components/ui/button/button.component";
import {HangmanLevelsComponent} from "./pages/hangman/hangman-levels/hangman-levels.component";
import {MemoryLevelsComponent} from "./pages/memory/memory-levels/memory-levels.component";
import {ErrorScreenComponent} from "./pages/error-screen/error-screen.component";
import {HangmanPlaygroundComponent} from "./pages/hangman/hangman-playground/hangman-playground.component";
import {LoaderComponent} from "./components/ui/loader/loader.component";
import {ManComponent} from "./pages/hangman/hangman-playground/man/man.component";
import {WordComponent} from "./pages/hangman/hangman-playground/word/word.component";
import {AlphabetComponent} from "./pages/hangman/hangman-playground/alphabet/alphabet.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GameChoiceComponent,
    ButtonComponent,
    HangmanLevelsComponent,
    MemoryLevelsComponent,
    LoaderComponent,
    HangmanPlaygroundComponent,
    ManComponent,
    WordComponent,
    AlphabetComponent,
    ErrorScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
