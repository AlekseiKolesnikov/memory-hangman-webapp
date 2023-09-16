import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Card} from "../../../data/memory/card";
import {GridStyle} from "../../../styles/grid/grid-style";
import {Flip} from "../../../data/memory/card-state/flip";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  randomEmoji: Card[];
  picAmount: number
  gridRep: number
  loading: boolean = false;
  flipCard: Flip

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
    this.flipCard.flip(false, false)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
  }

  gridStyle() {
    return this.style.getGridStyle(this.gridRep, 0.6);
  }
}
