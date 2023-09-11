import {Injectable} from "@angular/core";
import {IMemoryService} from "../../../types/memory/memory-service.type";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";

@Injectable({
  providedIn: 'root'
})
export class PictureArrayComposer {
  constructor() { }

  convertPicArray(picturesArray: IMemoryService[], picAmount: number): PictureDataset[] {
    const shuffled = picturesArray.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }

    return shuffled.slice(0, picAmount).map<PictureDataset>((value) => {
      const code = value.code.toString()
      const emoji = value.character.toString()
      const backSide = '?'
      const matchState = false
      return new PictureDataset(code, emoji, backSide, matchState)
    })
  }
}