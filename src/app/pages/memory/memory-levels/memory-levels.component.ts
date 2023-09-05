import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {LevelData} from "../../../data/memory/level-data/level-data";
import {memoryLevelsPicAmountData} from "../../../data/memory/base/levels-pictures-amount";
import {LevelDataMap} from "../../../data/memory/level-data/level-data-map";
import {GridStyle} from "../../../styles/grid/grid-style";

@Component({
  selector: 'app-memory-levels',
  templateUrl: './memory-levels.component.html',
  styleUrls: ['./memory-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryLevelsComponent implements OnInit {
  levelsDataArray: LevelData[]
  constructor(
    private levelDataMap: LevelDataMap,
    private style: GridStyle,
    private router: Router
  ) {}

  ngOnInit() {
    this.levelsDataArray = this.levelDataMap.getMemData(
      memoryLevelsPicAmountData.levels,
      memoryLevelsPicAmountData.picAmount
    )
  }

  onClick(picAmount: number): void {
    this.router.navigate(['memory-playground', {id: picAmount}])
  }

  gridStyle() {
    return this.style.getGridStyle(3);
  }
}
