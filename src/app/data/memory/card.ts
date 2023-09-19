import {Inject} from "@angular/core";

@Inject({
  providedIn: 'root'
})
export class Card {
  constructor(
    private emoji: string,
    private backSideImg: string,
    private state: string,
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

  getState(): string {
    return this.state
  }

  updateState(newFlipped: string): void {
    this.state = newFlipped
  }
}
