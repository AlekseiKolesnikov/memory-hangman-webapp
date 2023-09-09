import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  constructor(
    private http: HttpClient
  ) {
  }

  getPicture(): Observable<[]> {
    const emojiUrl = `https://api.api-ninjas.com/v1/emoji?group=animals_nature`

    return this.http.get<[]>(emojiUrl, {
      headers: {'X-Api-Key': 'dmvRA5SY/USu4FsNJ6yzyw==atJ7cgmZO2PZq8dL'
      }
    });
  }
}
