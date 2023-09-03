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
        private router: Router
    ) {
        super()
    }

    wordLetterIsHidden(letterArray: DataState[], bodyArray: DataState[], letter: DataState) {
        let matched: boolean = false;

        for (let item of letterArray) {
            if (item.getItem().toUpperCase() === letter.getItem()) {
                item.updateHidden(true)
                matched = true
            }
        }
        if (matched) {
            this.matchedCounter++;
            this.wrongLetter = false;
        } else {
            this.wrongLetter = true;
            this.bodyState(bodyArray, this.mismatchedCounter);
            this.mismatchedCounter++;
        }

        if (this.mismatchedCounter === bodyArray.length) {
            this.router.navigate(['defeat-screen'])
        }

        if (this.matchedCounter === letterArray.length) {
            this.router.navigate(['victory-screen'])
        }
    }

    alphabetLetterIsHidden(letterArray: DataState[], letter: DataState) {
        for (let item of letterArray) {
            if (item.getItem().toUpperCase() === letter.getItem()) {
                item.updateHidden(true)
            }
        }
    }

}
