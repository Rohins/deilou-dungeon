import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { CardResolveService } from '../card-resolve.service';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css'],
  inputs: ['cards']
})
export class CardStackComponent implements OnInit {
  public cards: Array<Card>;

  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this.shuffle();
  }

  /**
   * Shuffles the cards in the stack.
   **/
  shuffle() {
    let i = 0
      , j = 0
      , temp = null

    for (i = this.cards.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }
}
