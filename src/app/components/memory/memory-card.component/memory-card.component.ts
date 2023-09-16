import {Component, Input, ViewEncapsulation} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Card} from "../../../data/memory/card";
import {CardState} from "../../../data/memory/card-state/card-state";

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
export class MemoryCardComponent {
  @Input() card: Card;
  @Input() cardIndex: number;
  @Input() cardsArray: Card[];

  flip: string = 'active'
  firstCardIndex: number = 0;
  secondCardIndex: number = 0;
  winCount: number = 0;
  cardState: CardState

  constructor() { }

  toggleFlip(index: number, cards: Card[]) {
    this.cardState.updateFirstCardState(true)
    console.log(this.cardState.getFirstCardState());
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    console.log(cards);
    if (!cards[index].getFlipped()) {
      console.log('first')
      cards[index].updateFlipped(true)
      this.firstCardIndex = index
    } else {
      console.log('second')
      cards[index].updateFlipped(true)
      this.secondCardIndex = index

      const firstCard = cards[this.firstCardIndex]
      const secondCard = cards[this.secondCardIndex]

      console.log(this.firstCardIndex);
      console.log(this.secondCardIndex);
      if (firstCard.getEmoji().toString() === secondCard.getEmoji().toString() &&
        this.firstCardIndex !== this.secondCardIndex) {
        firstCard.updateMatched(true)
        secondCard.updateMatched(true)
        this.winCount += 1;
        console.log(cards);
      } else {
        cards[this.firstCardIndex].updateFlipped(false)
        cards[this.secondCardIndex].updateFlipped(false)
        console.log(cards);
        setTimeout(() => {

        }, 1000)
      }
    }
  }

}
