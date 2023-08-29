import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {WordLength} from "../../../services/random-word.service/word-length";
import {HandleWord} from 'src/app/services/random-word.service/handle-word';
import {DataState} from 'src/app/data/hangman/data-state';
import {GetGameData} from "../../../data/hangman/get-game-data";
import { hangmanData } from 'src/app/data/hangman/base/game-data';

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
  gallowsPartsArray: DataState[];
  bodyPartsArray: DataState[];
  alphabetArray: DataState[];
  wordArray: DataState[];

  private routeSub: Subscription;

  constructor(
    private getGameData: GetGameData,
    private setWordLength: WordLength,
    private handleWord: HandleWord,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.alphabetArray = this.getGameData.getData(hangmanData.alphabet);
    this.bodyPartsArray = this.getGameData.getData(hangmanData.hangman.man);
    this.gallowsPartsArray = this.getGameData.getData(hangmanData.hangman.gallows);
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
    let match: boolean = false;
    for (let item of this.wordArray) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
        match = true;
      }
    }
    for (let item of this.alphabetArray) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
      }
    }
    for (let item of this.bodyPartsArray) {
      if (match) {
        item.updateHidden(true)
        console.log(item)
      }
    }
  }
}
