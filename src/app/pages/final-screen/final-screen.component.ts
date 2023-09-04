import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MainButtonSetting} from "../../utilit/telegram/main-button-setting";

@Component({
  selector: 'app-final-screen',
  templateUrl: './final-screen.component.html',
  styleUrls: [
    './final-screen.component.scss',
    '../../styles/transitions/pages-transition.scss'
  ],
  encapsulation: ViewEncapsulation.None

})
export class FinalScreenComponent implements OnInit, OnDestroy {
  public level: string;
  public state: string;
  public showScreen: boolean = false;
  public showButtons: boolean = false;

  private routeSub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainButton: MainButtonSetting
  ) { }

  ngOnInit() {
    setTimeout(() => this.showButtons = true, 1500)
    this.mainButton.activateButton('Главное Меню');

    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['level'];
      this.state = params['state'];
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.showButtons = false
  }

  click(isButton: string) {
    if (isButton === 'restart') {
      this.router.navigate(['hangman-playground', {id: this.level}]);
    }
    if (isButton === 'change-level') {
      this.router.navigate(['hangman-levels']);
    }
  }

  touch(event: Event, isButton: string) {
    event.preventDefault()
    if (isButton === 'restart') {
      this.router.navigate(['hangman-playground', {id: this.level}]);
    }
    if (isButton === 'change-level') {
      this.router.navigate(['hangman-levels']);
    }
  }
}
