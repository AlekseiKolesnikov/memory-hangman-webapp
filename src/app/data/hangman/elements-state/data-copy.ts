import {DataState} from "./data-state";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataCopy {
  constructor() {}

  getData(lettersArray: string[]): DataState[] {

    return lettersArray.map<DataState>((value, _0, _1) => {
      return new DataState(value)
    })
  }
}

