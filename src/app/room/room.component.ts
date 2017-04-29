import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public deck: Deck;

  constructor() { }

  ngOnInit() {
    this.deck = new Deck;
    console.log(this.deck);
  }

}
