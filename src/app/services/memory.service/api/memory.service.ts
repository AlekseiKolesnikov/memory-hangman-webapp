import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMemoryService} from "../../../types/memory/memory-service.type";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  constructor(
    private http: HttpClient) {
  }

  getPicture(): Observable<IMemoryService> {
    return this.http.get<IMemoryService>(`https://emojihub.yurace.pro/api/random/group/animal-bird`);
  }
}
