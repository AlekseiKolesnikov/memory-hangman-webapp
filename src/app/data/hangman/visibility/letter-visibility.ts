import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";
import {BodyVisibility} from "./body-visibility";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LetterVisibility extends BodyVisibility {
  mismatchedCounter: number = 0;
  matchedCounter: number = 0;
  wrongLetter: boolean = true;

  constructor(
    private router: Router,
  ) {
    super()
  }

  wordLetterIsHidden(letterArray: DataState[], bodyArray: DataState[], letter: DataState, level: string) {
    let matched: boolean = false;

    for (let item of letterArray) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
        this.matchedCounter++;
        matched = true
      }
    }
    if (matched) {
      this.wrongLetter = false;
    } else {
      this.wrongLetter = true;
      this.bodyState(bodyArray, this.mismatchedCounter);
      this.mismatchedCounter++;
    }

    if (this.mismatchedCounter === bodyArray.length) {
      this.router.navigate(['final-screen', {level: level, state: 'defeat'}])
      this.mismatchedCounter = 0
      this.matchedCounter = 0
    }
    if (this.matchedCounter === letterArray.length) {
      this.router.navigate(['final-screen', {level: level, state: 'victory'}])
      this.mismatchedCounter = 0
      this.matchedCounter = 0
    }
  }

  alphabetLetterIsHidden(letterArray: DataState[], letter: DataState) {
    for (let item of letterArray) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
      }
    }
  }

  cleanCounters() {
    this.mismatchedCounter = 0
    this.matchedCounter = 0
  }
}

