import {Injectable} from "@angular/core";
import {PictureDataset} from "../../data/memory/picture-dataset/picture-dataset";
import {PictureArrayComposer} from "./api/picture-array-composer";
import {IMemoryService} from "../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class PicturesArray {
  constructor(
    private pictureArrayComposer: PictureArrayComposer
  ) { }

  getPicDataArray(picturesArray: IMemoryService[], picAmount: number): PictureDataset[] {
    const picArray = this.pictureArrayComposer.convertPicArray(picturesArray, picAmount)
    const doubleArray = [...picArray, ...picArray]

    for (let i = doubleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
    }
    return doubleArray
  }
}
