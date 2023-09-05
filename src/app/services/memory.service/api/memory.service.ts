import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RandomPath} from "./random-path";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  constructor(
    private http: HttpClient,
    private randomPath: RandomPath
  ) {
  }

  getPicture() {
    const randomPictureUrl: string = `https://robohash.org/${this.randomPath.getPath()}.png`

    return this.http.get(randomPictureUrl, {responseType: 'blob'});
  }
}
