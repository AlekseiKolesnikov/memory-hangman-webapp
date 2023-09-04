import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MainButtonSetting {
  constructor(
    private router: Router
  ) {
  }

  activateButton(text: string) {
    // @ts-ignore
    Telegram.WebApp.MainButton.show();
    // @ts-ignore
    Telegram.WebApp.MainButton.setText(text)
    // @ts-ignore
    Telegram.WebApp.onEvent("mainButtonClicked", () => {
      this.router.navigate(['game-choice']);
      // @ts-ignore
      Telegram.WebApp.MainButton.hide();
    })
  }
}
