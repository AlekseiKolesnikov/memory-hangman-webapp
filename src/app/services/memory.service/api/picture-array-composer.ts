import {Injectable} from "@angular/core";
import {IMemoryService} from "../../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class PictureArrayComposer {
  constructor() { }

  convertPicArray(picturesArray: IMemoryService[], picAmount: number): IMemoryService[] {
    const shuffled = picturesArray.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    return shuffled.slice(0, picAmount)
  }
}
