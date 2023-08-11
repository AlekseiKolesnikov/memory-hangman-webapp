import {Injectable} from "@angular/core";
import {SetWordLength} from "./set-word-length";
import {WordService} from "./api/word.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HandleWord {
  constructor(
    private setWordLength: SetWordLength,
    private wordService: WordService
  ) { }

  getWord(callBack: (word: string) => void, minWordLength: number, maxWordLength: number) {
    this.wordService.getWordData().subscribe(fetchedWord => {
      const word: string = fetchedWord.toString();
      console.log(fetchedWord)
      if (word.length >= minWordLength && word.length <= maxWordLength) {
        callBack(word)
      } else {
        this.getWord(callBack, minWordLength, maxWordLength)
      }
    })
    return minWordLength;
  }
}
