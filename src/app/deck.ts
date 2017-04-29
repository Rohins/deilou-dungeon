import { Card } from './card/card';

export class Deck {
  cards = [];

  constructor() {
    var suites = [
      'clovers', 
      'spades', 
      'hearts', 
      'diamonds'
    ];

    var faces = [
      '2', 
      '3', 
      '4', 
      '5', 
      '6', 
      '7', 
      '8', 
      '9', 
      'J', 
      'Q', 
      'K', 
      'A'
    ];

    faces.forEach(face => {
      suites.forEach(suite => {
        this.cards.push(new Card(face, suite));
      });
    });

    this.shuffle();
  }

  get() {
    return this.cards;
  }

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
