import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-memory-button',
  templateUrl: './memory-button.component.component.html',
  styleUrls: [
    './memory-button.component.component.scss',
    '../../ui/button/button.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class MemoryButtonComponent {
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();
  isClicked: boolean = false;
  constructor() {}

  click(): void {
    this.isClicked = true;
    this.buttonClick.emit()
  }

  touch(event: Event) {
    event.preventDefault()
    this.isClicked = true
    this.buttonClick.emit()
  }
}
