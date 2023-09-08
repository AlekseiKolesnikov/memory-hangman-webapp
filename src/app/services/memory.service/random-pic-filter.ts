import {Injectable} from "@angular/core";
import {distinct, repeat, Subscription} from "rxjs";
import {MemoryService} from "./api/memory.service";
import {PicturesArray} from "./pictures-array";
import {PictureDataset} from "../../data/memory/picture-dataset/picture-dataset";
import {IMemoryService} from "../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class RandomPicFilter {
  randomPictureData: IMemoryService[] = [];
  private subscription: Subscription;

  constructor(
    private memoryService: MemoryService,
    private picturesArray: PicturesArray
  ) {
  }

  destroySubscription() {
    this.subscription.unsubscribe()
    this.randomPictureData = []
  }

  getPic(callBack: (pictureData: PictureDataset[]) => void, levelAndPicAmount: number): void {
    const observable = this.memoryService.getPicture()

    const observer = {
      next: (data: IMemoryService) => {
        this.randomPictureData.push(data)
      },
      error: (error: Error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
        callBack(this.picturesArray.getPicDataArray(this.randomPictureData))
      }
    }

    this.subscription = observable
      .pipe(
        distinct(),
        repeat(levelAndPicAmount)
      )
      .subscribe(observer)
  }
}
