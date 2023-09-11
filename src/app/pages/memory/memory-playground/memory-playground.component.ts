import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";
import {GridStyle} from "../../../styles/grid/grid-style";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  randomEmoji: PictureDataset[]
  picAmount: number
  gridRep: number
  loading: boolean = false;
  firstCard: boolean = false;
  secondCard: boolean = false;
  firstCardIndex: number = 0;
  secondCardIndex: number = 0;

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private randomPicFilter: RandomPicFilter,
    private style: GridStyle
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.picAmount = params['id'];
      this.gridRep = params['grid'];
    })

    this.randomPicFilter.getPic((data) => {
      this.randomEmoji = data
      this.loading = true;
    }, this.picAmount)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
  }

  isClicked(card: PictureDataset, cardIndex: number) {
    if (!card.getMatchState()) {
      if (!this.firstCard) {
        this.firstCard = true
        this.firstCardIndex = cardIndex
      } else {
        const firstCard = this.randomEmoji[this.firstCardIndex]
        const secondCard = this.randomEmoji[this.secondCardIndex]

        this.secondCard = true
        this.secondCardIndex = cardIndex

        if (firstCard.getName() === secondCard.getName() && firstCard !== secondCard) {
          firstCard.updateMatchState(true)
          secondCard.updateMatchState(true)
          console.log(this.randomEmoji)
          this.firstCard = false
        } else {
          this.firstCard = false
          this.secondCard = false
          console.log('not matched')
        }
      }
    }
  }

  gridStyle() {
    return this.style.getGridStyle(this.gridRep, 0.6);
  }
}
