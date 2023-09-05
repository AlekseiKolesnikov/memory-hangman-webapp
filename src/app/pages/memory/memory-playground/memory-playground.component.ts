import {Component, OnDestroy, OnInit} from '@angular/core';
import {RandomPicFilter} from "../../../services/memory.service/random-pic-filter";
import {LevelData} from "../../../data/memory/level-data/level-data";

@Component({
  selector: 'app-memory-playground',
  templateUrl: './memory-playground.component.html',
  styleUrls: ['./memory-playground.component.scss']
})
export class MemoryPlaygroundComponent implements OnInit, OnDestroy {
  levelsDataArray: LevelData[]
  randomPicture: string
  constructor(
    private randomPicFilter: RandomPicFilter
  ) {
  }

  ngOnInit() {
    this.randomPicFilter.getPic((picture) => {
      this.randomPicture = picture.toString()
    }, this.levelsDataArray)
    // this.memoryService.getPicture()
    //   .subscribe((data) => {
    //     this.randomPicture = URL.createObjectURL(data)
    //   })
  }

  ngOnDestroy() {
    this.randomPicFilter.destroySubscription()
  }
}
