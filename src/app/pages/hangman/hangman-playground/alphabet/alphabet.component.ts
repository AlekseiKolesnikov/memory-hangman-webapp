import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlphabetComponent {
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();
  constructor() {}

  public click(): void {
    this.buttonClick.emit()
  }
}
