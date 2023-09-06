import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss']
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  randomEmoji: PictureDataset[]
  picAmount: number

  private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private randomPicFilter: RandomPicFilter
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.picAmount = params['id'];
    })

    this.randomPicFilter.getPic((emoji) => {
      this.randomEmoji = emoji
    }, this.picAmount)
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
  }
}
