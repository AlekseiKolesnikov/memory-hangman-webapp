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

  onClick() {

  }
  gridStyle() {
    return this.style.getGridStyle(this.gridRep, 0.6);
  }
}
