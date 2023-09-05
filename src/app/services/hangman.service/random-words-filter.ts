import {Injectable} from "@angular/core";
import {RandomWordService} from "./api/random-word.service";
import {WordLetters} from "./word-letters";
import {filter, retry, Subscription} from "rxjs";
import {DataState} from "../../data/hangman/elements-state/data-state";

@Injectable({
  providedIn: 'root'
})
export class RandomWordsFilter {
  private subscription: Subscription;

  constructor(
    private wordService: RandomWordService,
    private wordLetterArray: WordLetters
  ) { }

  destroySubscription(): void {
    this.subscription.unsubscribe()
  }

  getWord(callBack: (word: DataState[]) => void, minWordLength: number, maxWordLength: number): void {
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
        retry(200),
      )
      .subscribe(fetchedWord => {
        const word: string = fetchedWord.toString();
        callBack(this.wordLetterArray.makeWordLettersArray(word))
      })
  }
}
