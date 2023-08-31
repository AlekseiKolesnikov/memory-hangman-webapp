import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";

@Injectable({
  providedIn: 'root'
})
export class LetterVisibility {
  matchedCounter: number = 0;
  constructor() { }

  letterIsHidden(array: DataState[], letter: DataState) {
    for (let item of array) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
        console.log(item)
        this.matchedCounter++;
      }
    }
  }
}
