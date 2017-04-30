import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardResolveService } from '../card-resolve.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['face', 'suite'],
  providers: [CardResolveService]
})
export class CardComponent implements OnInit {
  public face:  string;
  public suite: string;

  /**
   * The card data (suite, face)
   **/
  public card: Card;
  
  /**
   * State representing if the card is facing up.
   **/
  faceUp = false;

  /**
   * State representing the card is complete. When true
   * the card will be removed.
   **/
  complete = false;


  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this.card = new Card(this.face, this.suite);
  }

  /**
   * Helper function for determining a numeric value for
   * the card's face value.
   **/
  getValue() {
    return this.card.value();
  }

  /**
   * Flip the card!
   **/
  flip() {
    this.faceUp = this.faceUp ? false : true;
  }

  /**
   * If the card is facing down, flip it up.
   * Otherwise, resolve the card's mechanics.
   **/
  resolve() {
    if (!this.faceUp) {
      this.flip();
      return;
    }

    this.computeMechanics();
  }
  
  /**
   * Compute the logic based on the card's suite
   * and face value.
   **/
  computeMechanics() {
    this._cardResolveService.resolveCard(this.card);
    this.complete = true;
  }

}
