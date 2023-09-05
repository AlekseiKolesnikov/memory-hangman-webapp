import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RandomPath {
  constructor() { }

  getPath(): string {
    const symbols: string = 'qwertyuiopasdfghjklzxcvbnm1234567890'
    const randomSymbol1 = symbols.charAt(Math.floor(Math.random() * symbols.length));
    const randomSymbol2 = symbols.charAt(Math.floor(Math.random() * symbols.length));

    return randomSymbol1 + randomSymbol2;
  }
}
