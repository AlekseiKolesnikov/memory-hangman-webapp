import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainButtonSett {
  constructor(
    private router: Router
  ) { }

  activateButton() {
    // @ts-ignore
    Telegram.WebApp.MainButton.show();
    // @ts-ignore
    Telegram.WebApp.MainButton.setText('Закончить Игру')
    // @ts-ignore
    Telegram.WebApp.onEvent("mainButtonClicked", () => {
      this.router.navigate(['game-choice']);
      // @ts-ignore
      Telegram.WebApp.MainButton.hide();
    })
  }
}
