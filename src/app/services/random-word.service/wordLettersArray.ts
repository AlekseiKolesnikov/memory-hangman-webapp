import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WordLettersArray {
  constructor() {}

  makeWordLettersArray(fetchedWord: string): string[] {
    let split;
    let array = [];
    for (let word of fetchedWord) {
      split = word.split('');
      for (let letter of split) {
        array.push(letter);
      }
    }
    return array;
  }
}
