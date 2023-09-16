import {Injectable} from "@angular/core";
import {Level} from "./level";

@Injectable({
  providedIn: 'root'
})
export class LevelDataMap {
  constructor() { }

  getMemData(levelsArray: number[], picAmountArray: number[], gridRepetition: number[]): Level[] {
    return levelsArray.map<Level>((level, index, _1) => {
      const picAmount = picAmountArray[index]
      const grid = gridRepetition[index]
        return new Level(level, picAmount, grid)
    })
  }
}
