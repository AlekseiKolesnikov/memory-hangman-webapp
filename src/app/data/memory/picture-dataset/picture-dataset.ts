import {Inject} from "@angular/core";

@Inject({
  providedIn: 'root'
})
export class PictureDataset {
  constructor(
    private name: string,
    private emoji: string,
    private backSideImg: string
  ) { }

  getName(): string {
    return this.name
  }

  getEmoji(): string {
    return this.emoji
  }

  getBackSideImg(): string {
    return this.backSideImg
  }
}
