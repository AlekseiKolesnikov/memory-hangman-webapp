import {Injectable} from "@angular/core";
import {WordService} from "./api/word.service";
import {WordLettersArray} from "./wordLettersArray";

@Injectable({
  providedIn: 'root'
})
export class HandleWord {
  constructor(
    private wordService: WordService,
    private wordLetterArray: WordLettersArray
  ) { }

  getWord(callBack: (word: string[]) => void, minWordLength: number, maxWordLength: number): void {
    this.wordService.getWordData()
      .subscribe(fetchedWord => {
      const word: string = fetchedWord.toString();
      console.log(fetchedWord)
      if (word.length >= minWordLength && word.length <= maxWordLength) {
        callBack(this.wordLetterArray.makeWordLettersArray(word))
      } else {
        this.getWord(callBack, minWordLength, maxWordLength)
      }
    })
  }
}
