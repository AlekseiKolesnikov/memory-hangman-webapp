import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {Level} from "../../../data/memory/level-data/level";
import {levelData} from "../../../data/memory/level-data/level-data";
import {LevelDataMap} from "../../../data/memory/level-data/level-data-map";
import {GridStyle} from "../../../styles/grid/grid-style";

@Component({
  selector: 'app-memory-levels',
  templateUrl: './memory-levels.component.html',
  styleUrls: ['./memory-levels.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MemoryLevelsComponent implements OnInit {
  levelsDataArray: Level[]
  constructor(
    private levelDataMap: LevelDataMap,
    private style: GridStyle,
    private router: Router
  ) {}

  ngOnInit() {
    this.levelsDataArray = this.levelDataMap.getMemData(
      levelData.levels,
      levelData.picAmount,
      levelData.gridRepetition
    )
  }

  onClick(picAmount: number, gridRep: number): void {
    this.router.navigate(['memory-playground', {id: picAmount, grid: gridRep}])
  }

  gridStyle() {
    return this.style.getGridStyle(3, 2);
  }
}
