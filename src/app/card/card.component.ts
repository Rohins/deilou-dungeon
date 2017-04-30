import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardResolveService } from '../card-resolve.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['card']
})
export class CardComponent implements OnInit {
  /**
   * The card data (suite, face)
   **/
  public card: Card;
  
  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
  }

  /**
   * Helper function for determining a numeric value for
   * the card's face value.
   **/
  getValue() {
    return this.card.value();
  }

  /**
   * Helper function for determining if the card is face up.
   **/
  faceUp() {
    return this.card.faceUp;
  } 

  /**
   * Helper function for determining if the card is fully
   * resolved.
   **/
  complete() {
    return this.card.complete;
  }

  /**
   * Flip the card!
   **/
  flip() {
    this.card.faceUp = this.card.faceUp ? false : true;
  }

  /**
   * If the card is facing down, flip it up.
   * Otherwise, resolve the card's mechanics.
   **/
  resolve() {
    if (!this.faceUp()) {
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
    this.card.complete = true;
  }

}
