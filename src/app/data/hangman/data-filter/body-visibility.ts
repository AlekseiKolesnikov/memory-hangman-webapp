import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";

@Injectable({
  providedIn: 'root'
})
export class BodyVisibility {
  bodyDetails: string[] = [];

  bodyState(array: DataState[]) {
    for (let item of array) {
      this.bodyDetails.push(item.getItem())
    }
    console.log(this.bodyDetails)
    return this.bodyDetails;
  }
}
