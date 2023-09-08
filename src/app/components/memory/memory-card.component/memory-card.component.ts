import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent {
  @Input() frontEmoji: string;
  @Input() backEmoji: string;
  constructor() {}
}
