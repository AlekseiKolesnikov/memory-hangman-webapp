import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HangmanLevelsComponent} from "./pages/hangman/hangman-levels/hangman-levels.component";
import {MemoryLevelsComponent} from "./pages/memory/memory-levels/memory-levels.component";
import {GameChoiceComponent} from "./pages/game-choice/game-choice.component";
import {ErrorScreenComponent} from "./pages/error-screen/error-screen.component";
import {HangmanPlaygroundComponent} from "./pages/hangman/hangman-playground/hangman-playground.component";
import {LoaderComponent} from "./components/ui/loader/loader.component";
import {FinalScreenComponent} from "./pages/final-screen/final-screen.component";

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
        path: 'loader',
        component: LoaderComponent
    },
    {
        path: 'hangman-playground',
        component: HangmanPlaygroundComponent
    },
    {
        path: 'final-screen',
        component: FinalScreenComponent
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
