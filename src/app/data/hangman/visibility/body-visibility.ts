import {Injectable} from "@angular/core";
import {DataState} from "../elements-state/data-state";

@Injectable({
    providedIn: 'root'
})
export class BodyVisibility {
    constructor() {
    }

    bodyState(array: DataState[], matchedCounter: number): DataState[] {
        array[matchedCounter].updateHidden(true)
        return array
    }
}
