import {Injectable} from "@angular/core";
import {Card} from "../../data/memory/card";
import {PictureArrayComposer} from "./api/picture-array-composer";
import {IMemoryService} from "../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class PicturesArray {
  constructor(
    private pictureArrayComposer: PictureArrayComposer
  ) { }

  getPicDataArray(picturesArray: IMemoryService[], picAmount: number): Card[] {
    const picArray = this.pictureArrayComposer.convertPicArray(picturesArray, picAmount)
    const doubleArray = [...picArray, ...picArray]

    for (let i = doubleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [doubleArray[i], doubleArray[j]] = [doubleArray[j], doubleArray[i]];
    }
    return doubleArray.map<Card>((value) => {
      const emoji = value.character.toString()
      const backSide = '?'
      const matched = false
      const flipped = false
      return new Card(emoji, backSide, flipped, matched)
    })
  }
}
