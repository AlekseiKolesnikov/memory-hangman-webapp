import {Inject} from "@angular/core";

@Inject({
  providedIn: 'root'
})
export class Card {
  constructor(
    private emoji: string,
    private backSideImg: string,
    private flipped: boolean,
    private matched: boolean
  ) { }

  getEmoji(): string {
    return this.emoji
  }

  getFrontSideImg(): string {
    return this.backSideImg
  }

  getMatched(): boolean {
    return this.matched
  }

  updateMatched(newMatchState: boolean): void {
    this.matched = newMatchState
  }

  getFlipped(): boolean {
    return this.flipped
  }

  updateFlipped(newFlipped: boolean): void {
    this.flipped = newFlipped
  }
}
