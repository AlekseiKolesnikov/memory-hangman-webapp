import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {Location} from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'memory-hangman-webapp';
  currentRoute: string;

  constructor(
    private router: Router,
    private location: Location
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentRoute = (event as NavigationEnd).url;
        if (this.currentRoute === '/game-choice') {
          // @ts-ignore
          Telegram.WebApp.BackButton.hide()
        } else {
          // @ts-ignore
          Telegram.WebApp.MainButton.hide();
          // @ts-ignore
          Telegram.WebApp.BackButton.show()
          // @ts-ignore
          Telegram.WebApp.BackButton.onClick(() => {
            location.back()
          })
        }
      });
  }

  ngOnInit(): void {
    this.router.navigate(['game-choice']);
  }
}
