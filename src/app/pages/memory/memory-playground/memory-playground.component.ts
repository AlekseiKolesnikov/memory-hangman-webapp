import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Card} from "../../../data/memory/card";
import {GridStyle} from "../../../styles/grid/grid-style";
import {Flip} from "../../../data/memory/card-state/flip";
import {CardState} from "../../../data/memory/card-state/card-state";
import {MainButtonSetting} from "../../../utilit/telegram/main-button-setting";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  randomEmoji: Card[];
  pictureAmount: number
  gridRep: number
  loading: boolean = false;
  flipCard: Flip
  cardState: CardState
  firstCardIndex: number = 0;
  secondCardIndex: number = 0;
  pairsAmount: number = 0;
  winCount: number = 0;

  private routeSub: Subscription;

  constructor(
    private mainButton: MainButtonSetting,
    private route: ActivatedRoute,
    private randomPicFilter: RandomPicFilter,
    private style: GridStyle,
    private router: Router
  ) {
    this.flipCard = new Flip()
    this.cardState = new CardState(false, false)
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.pictureAmount = params['level'];
      this.gridRep = params['grid'];
    })

    this.randomPicFilter.getPic((data) => {
      this.randomEmoji = data
      this.pairsAmount = this.randomEmoji.length / 2
      this.loading = true;
      this.mainButton.activateButton('Finish Game');
    }, this.pictureAmount)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
    this.randomEmoji = [];
  }

  toggleFlip(index: number, cards: Card[]) {
    if (!cards[index].getMatched()) {
      if (!this.cardState.getFirstCardState()) {
        this.firstCardIndex = index
        this.cardState.updateFirstCardState(true)
        cards[this.firstCardIndex].updateState('active')
      } else {
        this.secondCardIndex = index
        this.cardState.updateSecondCardState(true)
        cards[this.secondCardIndex].updateState('active')

        const firstCard = cards[this.firstCardIndex]
        const secondCard = cards[this.secondCardIndex]

        if (firstCard.getEmoji() === secondCard.getEmoji() &&
          this.firstCardIndex !== this.secondCardIndex) {
          this.cardState.updateFirstCardState(false)
          this.cardState.updateSecondCardState(false)
          firstCard.updateMatched(true)
          secondCard.updateMatched(true)
          firstCard.updateState('active')
          secondCard.updateState('active')
          this.winCount += 1;
        } else {
          setTimeout(() => {
            this.cardState.updateFirstCardState(false)
            this.cardState.updateSecondCardState(false)
            firstCard.updateState('inactive')
            secondCard.updateState('inactive')
          }, 1000)
        }
      }
    }
    if (this.winCount === this.pairsAmount) {
      setTimeout(() => {
        this.router.navigate(['final-screen', {
          game: 'memory',
          level: this.pictureAmount,
          state: 'victory',
          grid: this.gridRep
        }])
      }, 800)
    }
  }

  gridStyle() {
    return this.style.getGridStyle(this.gridRep, 0.6);
  }
}
