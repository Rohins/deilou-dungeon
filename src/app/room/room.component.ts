import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card/card';
import { CardResolveService } from '../card-resolve.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  inputs: ['floor']
})
export class RoomComponent implements OnInit {
  public deck:   Deck;

  public top:    Array<Card>;

  public right:  Array<Card>;
  public middle: Array<Card>;
  public left:   Array<Card>;
  public bottom: Array<Card>;

  public floor;
  public previousCards = new Array<Card>();

  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this.deck = new Deck;
    this.createFloor();
  }

  newFloor(floor: number) {
    this.floor = floor;
    this.createFloor();
  }

  createFloor() {
    this.top    = this.previousCards;

    if (this.floor === "5") {
      this.right  = new Array<Card>();
      this.left   = new Array<Card>();
      this.middle = this.deck.deal("6");
      this.bottom = this.deck.deal("6");
      return;
    }

    this.right  = this.deck.deal(this.floor);
    this.left   = this.deck.deal(this.floor);
    this.middle = this.deck.deal(this.floor);
    this.bottom = this.deck.deal(this.floor);
  }

  nextFloor() {
    this.floor = `${parseInt(this.floor) + 1}`;

    this.collectPreviousCards();

    this.createFloor();
  }

  collectPreviousCards() {
    this.previousCards = new Array<Card>();
    this.removeCompletedCards();
    this.removeFaceUpBeneficialCards();
    this.mergeRemainingCards();
  }

  filterComplete(cards: Array<Card>) {
    return cards.filter( 
      card => {
        return !card.complete;
      });

  }
  removeCompletedCards() {
    this.top    = this.filterComplete(this.top);
    this.bottom = this.filterComplete(this.bottom);
    this.middle = this.filterComplete(this.middle);
    this.right  = this.filterComplete(this.right);
    this.left   = this.filterComplete(this.left);
  }

  filterBeneficial(cards: Array<Card>) {
    return cards.filter(
      card => {
        return !card.beneficial() && card.faceUp || card.faceDown();
      });
  }

  removeFaceUpBeneficialCards() {
    this.top    = this.filterBeneficial(this.top);
    this.bottom = this.filterBeneficial(this.bottom);
    this.middle = this.filterBeneficial(this.middle);
    this.right  = this.filterBeneficial(this.right);
    this.left   = this.filterBeneficial(this.left);
  }

  mergeRemainingCards() {
    this.previousCards = this.previousCards.concat(this.top);
    this.previousCards = this.previousCards.concat(this.right);
    this.previousCards = this.previousCards.concat(this.left);
    this.previousCards = this.previousCards.concat(this.middle);
    this.previousCards = this.previousCards.concat(this.bottom);
  }

}
