import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {LevelLengthSettings} from "../../../services/random-word.service/level-length-settings";
import {RandomWordsFilter} from 'src/app/services/random-word.service/random-words-filter';
import {DataState} from 'src/app/data/hangman/elements-state/data-state';
import {DataCopy} from "../../../data/hangman/elements-state/data-copy";
import {hangmanClasses} from 'src/app/data/hangman/base/game-classes';
import {LetterVisibility} from "../../../data/hangman/visibility/letter-visibility";
import {MainButtonSetting} from "../../../utilit/telegram/main-button-setting";

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
    private mainButton: MainButtonSetting,
    private letterVisibility: LetterVisibility,
    private getGameData: DataCopy,
    private setWordLength: LevelLengthSettings,
    private handleWord: RandomWordsFilter,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.alphabetArray = this.getGameData.getData(hangmanClasses.alphabet);
    this.bodyArray = this.getGameData.getData(hangmanClasses.hangman.body);
    this.gallowsArray = this.getGameData.getData(hangmanClasses.hangman.gallows)
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['id'];
    })

    this.handleWord.getWord(
      (word) => {
        this.wordArray = word;
        this.loading = false;
        this.mainButton.activateButton('Закончить Игру');
      },
      this.setWordLength.getLengths(this.level).minLength,
      this.setWordLength.getLengths(this.level).maxLength
    );
  }

  ngOnDestroy() {
    this.handleWord.destroySubscription()
    this.routeSub.unsubscribe()
    this.letterVisibility.cleanCounters()
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
    this.letterVisibility.wordLetterIsHidden(this.wordArray, this.bodyArray, letter, this.level);
    this.letterVisibility.alphabetLetterIsHidden(this.alphabetArray, letter);
  }
}
