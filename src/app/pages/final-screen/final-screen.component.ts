import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MainButtonSetting} from "../../utilit/telegram/main-button-setting";

@Component({
  selector: 'app-final-screen',
  templateUrl: './final-screen.component.html',
  styleUrls: ['./final-screen.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class FinalScreenComponent implements OnInit, OnDestroy {
  level: string;
  state: string;

  private routeSub: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainButton: MainButtonSetting
  ) { }

  ngOnInit() {
    this.mainButton.activateButton('Главное Меню');

    this.routeSub = this.route.params.subscribe(params => {
      this.level = params['level'];
      this.state = params['state'];
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }

  click(isButton: string) {
    if (isButton === 'restart') {
      this.router.navigate(['hangman-playground', {id: this.level}]);
    }
    if (isButton === 'change-level') {
      this.router.navigate(['hangman-levels']);
    }
  }
}
