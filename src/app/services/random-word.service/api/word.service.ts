import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WordService {
  constructor(private http: HttpClient) {
  }

  getWordData(): Observable<object> {
    return this.http.get<Object>('https://random-word-api.herokuapp.com/word');
  }
}
