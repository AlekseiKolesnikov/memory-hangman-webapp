export class CardState {
  constructor(
    private firstCard: boolean,
    private secondCard: boolean
  ) {
  }

  getFirstCardState() {
    return this.firstCard
  }

  updateFirstCardState(newState: boolean): void {
    this.firstCard = newState
  }

  getSecondCardState() {
    return this.secondCard
  }

  updateSecondCardState(newState: boolean): void {
    this.secondCard = newState
  }
}
