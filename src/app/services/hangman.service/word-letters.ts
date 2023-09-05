import {Injectable} from "@angular/core";
import {DataState} from "../../data/hangman/elements-state/data-state";

@Injectable({
  providedIn: 'root'
})
export class WordLetters {
  constructor() {}

  makeWordLettersArray(fetchedWord: string): DataState[] {
    let split;
    let array = [];
    for (let word of fetchedWord) {
      split = word.split('');
      for (let letter of split) {
        array.push(letter);
      }
    }
    return array.map<DataState>((value, _0, _1) => {
      return new DataState(value,);
    });
  }
}
