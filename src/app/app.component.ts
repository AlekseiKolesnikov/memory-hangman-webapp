import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'memory-hangman-webapp';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['game-choice']);
    console.log(this.router);
  }
}
