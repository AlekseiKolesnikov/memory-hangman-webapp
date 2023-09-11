import {booleanAttribute, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
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
  @Input({transform: booleanAttribute}) secondCardState: boolean;
  @Input({transform: booleanAttribute}) firstCardState: boolean;
  @Output() buttonClick = new EventEmitter();

  flip: string = 'inactive'
  constructor() { }

  ngOnInit() {
  }

  toggleFlip() {
    this.buttonClick.emit()

    if (this.flip === 'inactive') {
      this.flip = 'active'
    }
    if (this.flip === 'active' && this.firstCardState && !this.secondCardState) {
      setTimeout(() => {
        this.flip = 'inactive'
      }, 1000)
    }
    if (this.flip === 'active' && this.firstCardState && this.secondCardState) {
      this.flip = 'active'
    }
  }
}
