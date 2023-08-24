import {Injectable} from "@angular/core";
import {WordService} from "./api/word.service";
import {WordLettersArray} from "./wordLettersArray";
import {Subscription} from "rxjs";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HandleWord {
  private subscription: Subscription;
  private location: Location;
  constructor(
    private wordService: WordService,
    private wordLetterArray: WordLettersArray
  ) { }

  getWord(callBack: (word: string[]) => void, minWordLength: number, maxWordLength: number): any {
    this.subscription = this.wordService.getWordData()
      .subscribe(fetchedWord => {
      const word: string = fetchedWord.toString();
      console.log(fetchedWord)
      if (word.length >= minWordLength && word.length <= maxWordLength) {
        callBack(this.wordLetterArray.makeWordLettersArray(word))
      } else {
        this.getWord(callBack, minWordLength, maxWordLength)
      }
    })

    if (location.pathname === '/hangman-levels') {
      this.subscription.unsubscribe()
    }
  }
}
