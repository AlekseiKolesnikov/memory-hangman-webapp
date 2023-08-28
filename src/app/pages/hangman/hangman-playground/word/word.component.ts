import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WordComponent {
  @Input() letterText: string;
  @Input() state: boolean;
  @Output() stateChange = new EventEmitter<boolean>();

  constructor() {}


}
