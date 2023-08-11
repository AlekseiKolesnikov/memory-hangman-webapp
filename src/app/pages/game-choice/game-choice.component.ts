import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'game-choice',
  templateUrl: './game-choice.component.html',
  styleUrls: [
    './game-choice.component.scss',
    '../../styles/transition.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class GameChoiceComponent implements OnInit {
  state: boolean = true;
  constructor(private router: Router) { }

  onClick(path: string) {
    this.state = !this.state;
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.router.navigate(['game-choice']);
    console.log(this.router);
  }
}
