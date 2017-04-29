import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {
  public cards;

  constructor() { }

  ngOnInit() {
    this.cards = [
      new Card("K", "hearts"),  
      new Card("A", "spades"),  
      new Card("3", "diamonds")  
    ];
  }

}
