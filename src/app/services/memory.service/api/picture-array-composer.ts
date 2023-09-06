import {Injectable} from "@angular/core";
import {IMemoryService} from "../../../types/memory/memory-service.type";
import {PictureDataset} from "../../../data/memory/picture-dataset/picture-dataset";

@Injectable({
  providedIn: 'root'
})
export class PictureArrayComposer {
  constructor() { }

  convertPicArray(picturesArray: IMemoryService[]): PictureDataset[] {
    return picturesArray.map<PictureDataset>((value) => {
      const name = value.name.toString()
      const emoji = value.htmlCode.toString()
      const backSide = '?'
      return new PictureDataset(name, emoji, backSide)
    })
  }
}
