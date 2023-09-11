import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class MemoryCardComponent implements OnInit {
  @Input() frontEmoji: string;
  @Input() backEmoji: string;
  @Input() emojiName: string;
  @Output() buttonClick = new EventEmitter();

  cardMatch: string[] = []
  flip: string = 'inactive'
  match: boolean = false
  constructor() { }

  ngOnInit() {
  }

  toggleFlip() {
    this.cardMatch.push(this.emojiName)
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
    this.buttonClick.emit()
    console.log(this.cardMatch)
  }
}
