import {Injectable} from "@angular/core";
import {LevelData} from "./level-data";

@Injectable({
  providedIn: 'root'
})
export class LevelDataMap {
  constructor() { }

  getMemData(levelsArray: number[], picAmountArray: number[]): LevelData[] {
    return levelsArray.map<LevelData>((level, index, _1) => {
      const picAmount = picAmountArray[index]
        return new LevelData(level, picAmount)
    })
  }
}
