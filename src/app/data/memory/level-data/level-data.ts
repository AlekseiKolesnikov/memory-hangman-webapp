import {Inject} from "@angular/core";

@Inject({
  providedIn: 'root'
})
export class LevelData {
  constructor(
    private level: number,
    private picAmount: number
  ) { }

  getLevel(): number {
    return this.level
  }

  getPicAmount(): number {
    return this.picAmount / 2
  }
}
