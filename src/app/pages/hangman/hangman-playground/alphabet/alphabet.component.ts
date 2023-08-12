import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent {
  @Input() buttonText: string;
  constructor() {
  }
}
