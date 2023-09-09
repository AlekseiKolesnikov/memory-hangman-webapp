import {Injectable} from "@angular/core";
import {Subscription} from "rxjs";
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

    this.subscription = observable
      .subscribe((data) => {
          callBack(this.picturesArray.getPicDataArray(data, levelAndPicAmount))
        }
      )
  }
}
