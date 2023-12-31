import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GridStyle {
  constructor() { }

  getGridStyle(repeatNumber: number, gap: number) {
    return {
      'display': 'grid',
      'grid-template-columns': `repeat(${repeatNumber}, 1fr)`,
      'justify-items': 'center',
      'align-items': 'center',
      'column-gap': `${gap}em`,
      'row-gap': `${gap}em`
    }
  }
}
