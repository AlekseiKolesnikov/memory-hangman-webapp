import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'hangman-levels',
  templateUrl: './hangman-levels.component.html',
  styleUrls: ['./hangman-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HangmanLevelsComponent {
  constructor(
    private router: Router
  ) {
  }

  onClick(level: string): void {
    this.router.navigate(['hangman-playground', {level: level}]);
  }
}
