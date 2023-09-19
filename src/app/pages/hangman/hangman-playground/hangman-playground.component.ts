import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {LevelLengthSettings} from "../../../services/hangman.service/level-length-settings";
import {RandomWordsFilter} from 'src/app/services/hangman.service/random-words-filter';
import {DataState} from 'src/app/data/hangman/elements-state/data-state';
import {DataCopy} from "../../../data/hangman/elements-state/data-copy";
import {hangmanClasses} from 'src/app/data/hangman/base/game-classes';
import {LetterVisibility} from "../../../data/hangman/visibility/letter-visibility";
import {MainButtonSetting} from "../../../utilit/telegram/main-button-setting";
import {GridStyle} from "../../../styles/grid/grid-style";
import {style} from "@angular/animations";

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
    private route: ActivatedRoute,
    private style: GridStyle
  ) {
  }

  ngOnInit(): void {
    this.alphabetArray = this.getGameData.getData(hangmanClasses.alphabet);
    this.bodyArray = this.getGameData.getData(hangmanClasses.hangman.body);
    this.gallowsArray = this.getGameData.getData(hangmanClasses.hangman.gallows)
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['level'];
    })

    this.handleWord.getWord(
      (word) => {
        this.wordArray = word;
        this.loading = false;
        this.mainButton.activateButton('Finish Game');
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
    return this.style.getGridStyle(this.wordArray.length, 0.5);
  }

  matchLetters(letter: DataState) {
    this.letterVisibility.wordLetterIsHidden(this.wordArray, this.bodyArray, letter, this.level);
    this.letterVisibility.alphabetLetterIsHidden(this.alphabetArray, letter);
  }
}
