import {Injectable} from "@angular/core";
import {retry, Subscription} from "rxjs";
import {MemoryService} from "./api/memory.service";
import {LevelData} from "../../data/memory/level-data/level-data";

@Injectable({
  providedIn: 'root'
})
export class RandomPicFilter {
  randomPicture: string;
  private subscription: Subscription;

  constructor(
    private memoryService: MemoryService
  ) {
  }

  destroySubscription() {
    this.subscription.unsubscribe()
  }

  getPic(callBack: (picture: LevelData[]) => void, levelAndPicAmount: LevelData[]): void {
    const observable = this.memoryService.getPicture()


    this.subscription = observable
      .pipe(

      )
      .subscribe((data) => {
        this.randomPicture = URL.createObjectURL(data)
      })
  }
}
