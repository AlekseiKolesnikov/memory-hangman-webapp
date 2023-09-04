import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'game-choice',
  templateUrl: './game-choice.component.html',
  styleUrls: [
    './game-choice.component.scss',
    '../../styles/transitions/pages-transition.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class GameChoiceComponent implements OnInit {
  constructor(private router: Router) { }

  onClick(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.router.navigate(['game-choice']);
  }
}
