import {Inject} from "@angular/core";

@Inject({
  providedIn: 'root'
})
export class Level {
  constructor(
    private level: number,
    private picAmount: number,
    private gridRep: number
  ) { }

  getLevel(): number {
    return this.level
  }

  getPicAmount(): number {
    return this.picAmount / 2
  }

  getGridRepetition(): number {
    return this.gridRep
  }

}
