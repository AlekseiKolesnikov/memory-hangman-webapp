import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HandleWord} from "../../../services/random-word.service/handle-word";
import {WordLength} from "../../../services/random-word.service/word-length";

@Component({
  selector: 'app-hangman-playground',
  templateUrl: './hangman-playground.component.html',
  styleUrls: ['./hangman-playground.component.scss']
})
export class HangmanPlaygroundComponent implements OnInit {
  private routeSub: Subscription;
  level: string;
  loading: boolean = false;
  wordArray: string
  constructor(
    private handlerWord: HandleWord,
    private setWordLength: WordLength,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['id'];
    })

    this.handlerWord.getWord(
      (word) => {
        console.log(word)
        this.loading = false;
      },
      this.setWordLength.getLengths(this.level).minLength,
      this.setWordLength.getLengths(this.level).maxLength
    );
  }
}
