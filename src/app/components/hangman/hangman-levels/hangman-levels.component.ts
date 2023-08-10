import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'hangman-levels',
  templateUrl: './hangman-levels.component.html',
  styleUrls: ['./hangman-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HangmanLevelsComponent implements OnInit {
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.router.navigate(['hangman-levels']);
    console.log(this.router);
  }
}
