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
        this.checkIfDead();
      });

  }

  damage(value: number) {
    if (this.shield >= value) {
      this.shield -= value;
      console.log(`You blocked ${value} damage!`);
      return;
    }

    value -= this.shield;
    if (this.shield > 0) {
      console.log(`You blocked ${this.shield} damage!`);
    }

    this.shield = 0;
    console.log(`Your shield broke!`);

    this.health -= value;
    console.log(`You take ${value} damage!`);
  }

  checkIfDead() {
    if (this.health <= 0) {
      console.log("You are dead!");
      return true;
    }

    return false;
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
}
