import {Injectable} from "@angular/core";
import {IMemoryService} from "../../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class PictureArrayComposer {
  constructor() { }

  mixDoubleArray(picArray: IMemoryService[]) {
    const doubleArray = [...picArray, ...picArray]

    for (let i = doubleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
    }
    return doubleArray
  }
}
