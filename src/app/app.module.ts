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
import {ManComponent} from "./components/hangman/man/man.component";
import {WordComponent} from "./components/hangman/word/word.component";
import {AlphabetComponent} from "./components/hangman/alphabet/alphabet.component";
import {HttpClientModule} from "@angular/common/http";
import {MemoryButtonComponent} from "./components/memory/memory-button.component/memory-button.component.component";
import {GallowsComponent} from "./components/hangman/gallows/gallows.component";
import {FinalScreenComponent} from "./pages/final-screen/final-screen.component";
import {MemoryPlaygroundComponent} from "./pages/memory/memory-playground/memory-playground.component";
import {MemoryCardComponent} from "./components/memory/memory-card.component/memory-card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardState} from "./data/memory/card-state/card-state";

@NgModule({
  declarations: [
    AppComponent,
    GameChoiceComponent,
    ButtonComponent,
    HangmanLevelsComponent,
    MemoryLevelsComponent,
    LoaderComponent,
    HangmanPlaygroundComponent,
    GallowsComponent,
    ManComponent,
    WordComponent,
    AlphabetComponent,
    ErrorScreenComponent,
    MemoryButtonComponent,
    FinalScreenComponent,
    MemoryPlaygroundComponent,
    MemoryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
