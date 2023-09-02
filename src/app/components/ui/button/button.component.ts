import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();
  isClicked:boolean = false;

  click(): void {
    this.isClicked = true;
    this.buttonClick.emit()
  }
}
