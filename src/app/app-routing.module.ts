import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HangmanLevelsComponent} from "./components/hangman/hangman-levels/hangman-levels.component";
import {MemoryLevelsComponent} from "./components/memory/memory-levels/memory-levels.component";
import {GameChoiceComponent} from "./components/game-choice/game-choice.component";
import {ErrorScreenComponent} from "./components/error-screen/error-screen.component";

const routes: Routes = [
  {
    path: 'game-choice',
    component: GameChoiceComponent
  },
  {
    path: 'hangman-levels',
    component: HangmanLevelsComponent
  },
  {
    path: 'memory-levels',
    component: MemoryLevelsComponent
  },
  {
    path: '',
    redirectTo: 'game-choice',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
