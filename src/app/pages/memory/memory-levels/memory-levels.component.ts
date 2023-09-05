import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MemoryService} from "../../../services/memory.service/api/memory.service";
import {LevelData} from "../../../data/memory/level-data/level-data";
import {LevelDataMap} from "../../../data/memory/level-data/level-data-map";
import {memoryLevelsPicAmountData} from "../../../data/memory/base/levels-pictures-amount";

@Component({
  selector: 'app-memory-levels',
  templateUrl: './memory-levels.component.html',
  styleUrls: ['./memory-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryLevelsComponent implements OnInit {
  public levelsArray: LevelData[]
  public picAmountArray: LevelData[]
  randomPicture: string
  constructor(
    private memoryService: MemoryService,
    private levelDataMap: LevelDataMap
  ) {
  }

  ngOnInit() {
    this.levelsArray = this.levelDataMap.getMemData(
      memoryLevelsPicAmountData.levels,
      memoryLevelsPicAmountData.picAmount
    )
    console.log(this.levelsArray)
    // this.memoryService.getPicture()
    //   .subscribe((data) => {
    //     this.randomPicture = URL.createObjectURL(data)
    //   })
  }
}
