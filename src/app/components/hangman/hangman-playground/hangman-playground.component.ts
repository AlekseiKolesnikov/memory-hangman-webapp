import {Component, OnInit} from '@angular/core';
import {WordService} from "../../../services/random-word.service/word.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hangman-playground',
  templateUrl: './hangman-playground.component.html',
  styleUrls: ['./hangman-playground.component.scss']
})
export class HangmanPlaygroundComponent implements OnInit {
  private routeSub: Subscription;
  loading: boolean = false;
  constructor(
    private wordService: WordService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loading = true;
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
    })

    this.wordService.getWord().subscribe(word => {
      console.log(word)
    })
    this.loading = false;
  }
}
