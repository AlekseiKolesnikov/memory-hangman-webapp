import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {WordLength} from "../../../services/random-word.service/word-length";
import {WordFilter} from 'src/app/services/random-word.service/word-filter';
import {DataState} from 'src/app/data/hangman/elements-state/data-state';
import {DataCopy} from "../../../data/hangman/elements-state/data-copy";
import {hangmanData} from 'src/app/data/hangman/base/game-data';
import {DataStateFilter} from "../../../data/hangman/body/data-state-filter";

@Component({
  selector: 'app-hangman-playground',
  templateUrl: './hangman-playground.component.html',
  styleUrls: [
    './hangman-playground.component.scss',
    './word/word.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HangmanPlaygroundComponent implements OnInit, OnDestroy {
  level: string;
  loading: boolean = false;
  hangmanArray: DataState[];
  alphabetArray: DataState[];
  wordArray: DataState[];

  private routeSub: Subscription;

  constructor(
    private dataStateFilter: DataStateFilter,
    private getGameData: DataCopy,
    private setWordLength: WordLength,
    private handleWord: WordFilter,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.alphabetArray = this.getGameData.getData(hangmanData.alphabet);
    this.hangmanArray = this.getGameData.getData(hangmanData.hangman);
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['id'];
    })

    this.handleWord.getWord(
      (word) => {
        this.wordArray = word;
        this.loading = false;
        // @ts-ignore
        Telegram.WebApp.MainButton.show();
        // @ts-ignore
        Telegram.WebApp.MainButton.setText('Закончить Игру')
        // @ts-ignore
        Telegram.WebApp.onEvent("mainButtonClicked", () => {
          this.router.navigate(['game-choice']);
        })
      },
      this.setWordLength.getLengths(this.level).minLength,
      this.setWordLength.getLengths(this.level).maxLength
    );
  }

  ngOnDestroy() {
    this.handleWord.destroySubscription()
    this.routeSub.unsubscribe()
  }

  gridStyle() {
    return {
      'display': 'grid',
      'grid-template-columns': `repeat(${this.wordArray.length}, 1fr)`,
      'justify-items': 'center',
      'align-items': 'center',
      'column-gap': '0.5em'
    }
  }

  matchLetters(letter: DataState) {
    this.dataStateFilter.bodyState(this.hangmanArray);
    this.dataStateFilter.letterState(this.wordArray, letter);
    this.dataStateFilter.letterState(this.alphabetArray, letter);
  }
}
