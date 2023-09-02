import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'hangman-levels',
  templateUrl: './hangman-levels.component.html',
  styleUrls: [
    './hangman-levels.component.scss',
    '../../../styles/transitions/pages-transition.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class HangmanLevelsComponent implements OnInit {
  state: boolean = true;

  constructor(private router: Router) {
  }

  onClick(level: string): void {
    this.state = !this.state;
    this.router.navigate(['hangman-playground', {id: level}]);
  }

  ngOnInit(): void {
    this.router.navigate(['hangman-levels']);
  }
}
