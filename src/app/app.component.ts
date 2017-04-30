import { Component, OnInit } from '@angular/core';
import { Card } from './card/card';
import { CardResolveService } from './card-resolve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardResolveService]
})
export class AppComponent {
  title = 'Deilou Dungeon';

  maxHealth = 10;
  health    = 10;

  shield    = 0;

  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this._cardResolveService.cardResolved$.subscribe(
      card => {
        this.resolveCard(card);
      });

  }

  damage(value: number) {
    if (this.shield > value) {
      this.shield -= value;
      value = 0
      console.log(`You blocked ${value} damage!`);
    }

    if (value > this.shield) {
      value -= this.shield;
      this.shield = 0;
    }

    this.health -= value;
    console.log(`You take ${value} damage!`);

    if (this.health <= 0) {
      this.health = 0;
      console.log(`You are dead!`);
    }
  }

  equipShield(value: number) {
    this.shield = value;
    console.log(`Equiped +${value} shield!`);
  }

  heal(value: number) {
    this.health += value;

    console.log(`Drank +${value} potion!`);

    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
      console.log(`Health is maximum!`);
    }
  }

  resolveCard(card: Card) {
    switch(card.suite) {
      case "spades":
      case "clovers":
        this.damage(card.value());
        break;
      case "hearts":
        this.heal(card.value());
        break;
      case "diamonds":
        this.equipShield(card.value());
        break;
    }
  }

  testResolveService() {
    this._cardResolveService.resolveCard( new Card("K", "spades"));
  }
}
