import { Component, OnInit, EventEmitter } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card/card';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  inputs: ['floor'],
  outputs: [`resolveEvent`]
})
export class RoomComponent implements OnInit {
  public deck:   Deck;
  public top:    Array<Card>;
  public right:  Array<Card>;
  public middle: Array<Card>;
  public left:   Array<Card>;
  public bottom: Array<Card>;
  public floor:  Number;

  public resolveEvent = new EventEmitter<Card>();

  constructor() { }

  ngOnInit() {
    this.deck = new Deck;

    this.top    = this.deck.deal(this.floor);
    this.right  = this.deck.deal(this.floor);
    this.left   = this.deck.deal(this.floor);
    this.middle = this.deck.deal(this.floor);
    this.bottom = this.deck.deal(this.floor);
  }

  pushEvent(card: Card) {
    this.resolveEvent.emit(card);
  }

}
