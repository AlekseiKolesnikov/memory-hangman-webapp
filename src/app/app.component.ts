import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'memory-hangman-webapp';
  currentRoute: string;

  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event as NavigationEnd).url;
        console.log(this.currentRoute);
        if (this.currentRoute === '/game-choice') {

        } else {
        }
      });
  }

  ngOnInit(): void {
    this.router.navigate(['game-choice']);
  }
}
