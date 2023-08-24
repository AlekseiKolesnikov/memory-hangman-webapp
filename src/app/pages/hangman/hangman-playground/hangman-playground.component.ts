import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {WordLength} from "../../../services/random-word.service/word-length";
import hangmanData from "../../../data/hangman.data/hangman-game-data";
import {WordService} from "../../../services/random-word.service/api/word.service";
import {WordLettersArray} from 'src/app/services/random-word.service/wordLettersArray';
import {HandleWord} from 'src/app/services/random-word.service/handle-word';

@Component({
  selector: 'app-hangman-playground',
  templateUrl: './hangman-playground.component.html',
  styleUrls: ['./hangman-playground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HangmanPlaygroundComponent implements OnInit {
  level: string;
  loading: boolean = false;
  word$ = new Subject();
  bodyPartsArray: string[] = hangmanData.hangman;
  alphabetArray: string[] = hangmanData.alphabet;
  wordArray: string[];

  private routeSub: Subscription;

  constructor(
    private setWordLength: WordLength,
    private handleWord: HandleWord,
    private route: ActivatedRoute,
    private wordService: WordService,
    private wordLetterArray: WordLettersArray
  ) {
  }

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
}
