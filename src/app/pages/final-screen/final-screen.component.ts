import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MainButtonSetting} from "../../utilit/telegram/main-button-setting";
import {GameCheck} from "../../data/final-screen/game-check";
import {IGameRouteParams} from "../../types/memory/game-route-params";

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
  public grid: number;
  public game: string;
  public showScreen: boolean = false;
  public showButtons: boolean = false;
  private gameParams: IGameRouteParams;

  private routeSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainButton: MainButtonSetting,
    private gameCheck: GameCheck
  ) {
  }

  ngOnInit() {
    setTimeout(() => this.showButtons = true, 1500)
    this.mainButton.activateButton('Main Menu');

    this.routeSub = this.route.params.subscribe(params => {
      this.game = params['game'];
      this.level = params['level'];
      this.state = params['state'];
      this.grid = params['grid'];
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.showButtons = false
  }

  click(isButton: string) {
    this.gameParams = this.gameCheck.navigate(this.game)
    if (isButton === 'restart') {
      this.router.navigate([`${this.gameParams.gameRoute}`, {
        level: this.level,
        grid: this.grid
      }]);
    }
    if (isButton === 'change-levelData') {
      this.router.navigate([`${this.gameParams.gameLevelRoute}`]);
    }
  }

  touch(event: Event, isButton: string) {
    event.preventDefault()
    if (isButton === 'restart') {
      this.router.navigate([`${this.gameParams.gameRoute}`, {
        level: this.level,
        grid: this.grid
      }]);
    }
    if (isButton === 'change-levelData') {
      this.router.navigate([`${this.gameParams.gameLevelRoute}`]);
    }
  }
}
