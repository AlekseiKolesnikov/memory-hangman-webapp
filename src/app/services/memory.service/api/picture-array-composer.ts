import {Injectable} from "@angular/core";
import {IMemoryService} from "../../../types/memory/memory-service.type";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";

@Injectable({
  providedIn: 'root'
})
export class PictureArrayComposer {
  constructor() { }

  convertPicArray(picturesArray: IMemoryService[], picAmount: number): PictureDataset[] {

    return picturesArray.slice(0, picAmount).map<PictureDataset>((value) => {
      const code = value.code.toString()
      const emoji = value.character.toString()
      const backSide = '?'
      return new PictureDataset(code, emoji, backSide)
    })
  }
}
