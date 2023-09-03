import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";
import {BodyVisibility} from "./body-visibility";

@Injectable({
    providedIn: 'root'
})
export class LetterVisibility extends BodyVisibility {
    matchedCounter: number = 0;
    wrongLetter: boolean = true;

    constructor() {
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
            this.wrongLetter = false;
        } else {
            this.wrongLetter = true;
            this.bodyState(bodyArray, this.matchedCounter);
            this.matchedCounter++;
        }

        if (this.matchedCounter === letterArray.length) {
            
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
