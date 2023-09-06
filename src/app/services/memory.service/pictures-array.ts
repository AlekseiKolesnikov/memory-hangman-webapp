import {Injectable} from "@angular/core";
import {PictureArrayComposer} from "./api/picture-array-composer";
import {IMemoryService} from "../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class PicturesArray {
  constructor(
    private pictureArrayComposer: PictureArrayComposer
  ) { }

  getPicDataArray(picturesArray: IMemoryService[]): any {
    const finalArray = this.pictureArrayComposer.mixDoubleArray(picturesArray)
    console.log(finalArray);
  }
}
