import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Card} from "../../../data/memory/card";

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('inactive', style({
        transform: 'rotateY(-180deg)'
      })),
      state('active', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class MemoryCardComponent {
  @Input() card: Card;
  @Output() buttonClick = new EventEmitter();

  constructor() {}
}
