import {Injectable} from "@angular/core";
import {LevelData} from "./level-data";

@Injectable({
  providedIn: 'root'
})
export class LevelDataMap {
  constructor() { }

  getMemData(levelsArray: number[], picAmountArray: number[], gridRepetition: number[]): LevelData[] {
    return levelsArray.map<LevelData>((level, index, _1) => {
      const picAmount = picAmountArray[index]
      const grid = gridRepetition[index]
        return new LevelData(level, picAmount, grid)
    })
  }
}
