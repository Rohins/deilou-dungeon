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
  public floor:  Number;

  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this.deck = new Deck;

    this.top    = this.deck.deal(this.floor);
    this.right  = this.deck.deal(this.floor);
    this.left   = this.deck.deal(this.floor);
    this.middle = this.deck.deal(this.floor);
    this.bottom = this.deck.deal(this.floor);
  }

}
