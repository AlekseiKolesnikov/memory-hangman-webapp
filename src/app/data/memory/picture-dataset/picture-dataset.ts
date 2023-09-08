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

  getFrontSideImg(): string {
    return this.backSideImg
  }
}
