import {Injectable} from "@angular/core";
import {WordService} from "./api/word.service";
import {WordLettersArray} from "./word-letters-array";
import {Subscription, filter, retry} from "rxjs";
import {Location} from "@angular/common";
import {DataState} from "../../data/hangman/data-state";

@Injectable({
  providedIn: 'root'
})
export class HandleWord {
  private subscription: Subscription;

  constructor(
    private wordService: WordService,
    private wordLetterArray: WordLettersArray
  ) { }

  destroySubscription(): void {
    this.subscription.unsubscribe()
  }

  getWord(callBack: (word: DataState[]) => void, minWordLength: number, maxWordLength: number): any {
    const observable = this.wordService.getWordData()
    // TODO сделать Observable типа string
    const lengthFilter = (word: Object) => {
      const filterResult = (word.toString().length >= minWordLength
        && word.toString().length <= maxWordLength)
      console.log(word)
      if (filterResult) {
        return true
      } else {
        throw new Error()
      }
    }
    // TODO сделать нормальную цепь для получения слова
    this.subscription = observable
      .pipe(
        filter(lengthFilter),
        retry(100),
      )
      .subscribe(fetchedWord => {
        const word: string = fetchedWord.toString();
        callBack(this.wordLetterArray.makeWordLettersArray(word))
      })
  }
}
