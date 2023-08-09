import {Component, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'game-choice',
  templateUrl: './game-choice.component.html',
  styleUrls: [
    './game-choice.component.scss',
    './../ui/button/button.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class GameChoiceComponent {
  constructor(private router: Router) {
  }

  onClick(path: string) {
    this.router.navigate([path]);

  }
}
