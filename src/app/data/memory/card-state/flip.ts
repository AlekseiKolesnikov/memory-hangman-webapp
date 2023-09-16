import {CardState} from "./card-state";

export class Flip {
  constructor() {
  }

  flip(firstCardState: boolean, secondCardState: boolean): CardState {
    return new CardState(firstCardState, secondCardState);
  }
}
