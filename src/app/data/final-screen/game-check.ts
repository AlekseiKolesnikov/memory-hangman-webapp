import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GameCheck {
  gameRoute: string;
  gameLevelRoute: string;
  constructor() { }

  navigate(gameLabel: string) {
    if (gameLabel === 'hangman') {
      this.gameRoute = 'hangman-playground'
      this.gameLevelRoute = 'hangman-levels'
    }
    if (gameLabel === 'memory') {
      this.gameRoute = 'memory-playground'
      this.gameLevelRoute = 'memory-levels'
    }
    return {gameRoute: this.gameRoute, gameLevelRoute: this.gameLevelRoute}
  }
}
