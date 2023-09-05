import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RandomPath} from "./random-path";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  constructor(
    private http: HttpClient,
    private randomPath: RandomPath
  ) {
  }

  getPicture(): Observable<object> {
    return this.http.get<Object>(`https://emojihub.yurace.pro/api/random/group/animal-bird`);
  }
}
