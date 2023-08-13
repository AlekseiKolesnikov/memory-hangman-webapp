import {Injectable} from "@angular/core";

let currentAction: () => void;

@Injectable({
  providedIn: 'root'
})
export default class MainButton {
  static setActionToMainButton(action: () => void) {
    if (currentAction != null) {
      // @ts-ignore
      Telegram.WebApp.offEvent("mainButtonClicked", currentAction)
    }
    currentAction = action
    // @ts-ignore
    Telegram.WebApp.onEvent("mainButtonClicked", currentAction)
  }
}
