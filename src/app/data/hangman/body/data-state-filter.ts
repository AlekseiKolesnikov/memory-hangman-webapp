import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";

@Injectable({
  providedIn: 'root'
})
export class DataStateFilter {
  matchedCounter: number = 0;
  classArray: string[] = [];
  bodyDetails: string[] = [];
  constructor() { }

  letterState(array: DataState[], letter: DataState) {
    for (let item of array) {
      if (item.getItem().toUpperCase() === letter.getItem()) {
        item.updateHidden(true)
        console.log(item)
        this.matchedCounter++;
      }
    }
  }

  bodyState(array: DataState[]) {
    for (let item of array) {
      this.classArray.push(item.getItem())
    }
   this.classArray.forEach((value) => {
      if (value.includes('person')) {
        this.bodyDetails.push(value.slice(7))
      }
    })
    console.log(this.bodyDetails)
    return this.bodyDetails;
  }
}
