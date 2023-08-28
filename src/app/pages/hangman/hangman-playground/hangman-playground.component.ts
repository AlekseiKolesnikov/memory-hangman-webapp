import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WordLength} from "../../../services/random-word.service/word-length";
import hangmanData from "../../../data/hangman.data/hangman-game-data";
import {HandleWord} from 'src/app/services/random-word.service/handle-word';

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
  bodyPartsArray: string[] = hangmanData.hangman;
  alphabetArray: string[] = hangmanData.alphabet;
  wordArray: string[];
  matched: boolean = false;

  private routeSub: Subscription;

  constructor(
    private setWordLength: WordLength,
    private handleWord: HandleWord,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
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

        })
      },
      this.setWordLength.getLengths(this.level).minLength,
      this.setWordLength.getLengths(this.level).maxLength
    );
  }

  ngOnDestroy() {
    this.handleWord.destroySubscription()
  }

  gridStyle() {
    return {
      display: 'grid',
      'grid-template-columns': `repeat(${this.wordArray.length}, 1fr)`,
      'justify-items': 'center',
      'align-items': 'center',
      'column-gap': '0.5em'
    }
  }

  matchLetters(letter: string) {
    // for (let wordLetter of this.wordArray) {
      if (letter) {
        console.log(letter)
        this.matched = true;
      }
    // }
  }
}
