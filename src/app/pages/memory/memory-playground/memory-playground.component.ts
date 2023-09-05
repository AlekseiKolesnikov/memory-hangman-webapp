import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {LevelData} from "../../../data/memory/level-data/level-data";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss']
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  levelsDataArray: LevelData[]
  randomEmoji: LevelData[]
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
    }, this.levelsDataArray)
    // this.memoryService.getPicture()
    //   .subscribe((data) => {
    //     this.randomPicture = URL.createObjectURL(data)
    //   })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.randomPicFilter.destroySubscription()
  }
}
