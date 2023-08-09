import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.scss',
    '../../../styles/patterns.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() buttonText: string
}
