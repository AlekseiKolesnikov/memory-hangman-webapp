import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-memory-button',
  templateUrl: './memory-button.component.component.html',
  styleUrls: ['./memory-button.component.component.scss']
})
export class MemoryButtonComponent {
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();
  isClicked:boolean = false;
  constructor() {}

  click(): void {
    this.isClicked = true;
    this.buttonClick.emit()
  }
}
