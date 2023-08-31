import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WordLength} from "../../../services/random-word.service/word-length";
import {WordFilter} from 'src/app/services/random-word.service/word-filter';
import {DataState} from 'src/app/data/hangman/elements-state/data-state';
import {DataCopy} from "../../../data/hangman/elements-state/data-copy";
import {hangmanData} from 'src/app/data/hangman/base/game-data';
import {LetterVisibility} from "../../../data/hangman/data-filter/letter-visibility";
import {BodyVisibility} from "../../../data/hangman/data-filter/body-visibility";
import {MainButtonSett} from "../../../utilit/telegram/main-button-sett";

@Component({
  selector: 'app-hangman-playground',
  templateUrl: './hangman-playground.component.html',
  styleUrls: [
    './hangman-playground.component.scss',
    '../../../components/hangman/word/word.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HangmanPlaygroundComponent implements OnInit, OnDestroy {
  level: string;
  loading: boolean = false;
  bodyArray: DataState[];
  gallowsArray: DataState[];
  alphabetArray: DataState[];
  wordArray: DataState[];

  private routeSub: Subscription;

  constructor(
    private mainButton: MainButtonSett,
    private letterVisibility: LetterVisibility,
    private bodyVisibility: BodyVisibility,
    private getGameData: DataCopy,
    private setWordLength: WordLength,
    private handleWord: WordFilter,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.alphabetArray = this.getGameData.getData(hangmanData.alphabet);
    this.bodyArray = this.getGameData.getData(hangmanData.hangman.body);
    this.gallowsArray = this.getGameData.getData(hangmanData.hangman.gallows)
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['id'];
    })

    this.handleWord.getWord(
      (word) => {
        this.wordArray = word;
        this.loading = false;
        this.mainButton.activateButton();
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
    this.bodyVisibility.bodyState(this.bodyArray);
    this.letterVisibility.letterIsHidden(this.wordArray, letter);
    this.letterVisibility.letterIsHidden(this.alphabetArray, letter);
  }
}
