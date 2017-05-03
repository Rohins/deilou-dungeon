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
  title = 'DEILOU DUNGEON';

  maxHealth = 20;
  health    = 20; 
  shield    = 5;
  score     = 0;

  log       = new Array<string>();

  constructor(private _cardResolveService: CardResolveService) { }

  ngOnInit() {
    this._cardResolveService.cardResolved$.subscribe(
      card => {
        this.resolveCard(card);
        this.checkIfDead();
      });

  }

  damage(value: number) {
    if (this.shield == value) {
      this.logAction("Wow, a perfect block!");

      //Perfect blocks is worth 3x points.
      //No shield damage.
      this.score += value*3;
      return;
    }

    if (this.shield >= value) {
      this.shield -= value;
      this.logAction(`You blocked ${value} damage!`);
      
      //Fully blocked damage is worth 2x points.
      this.score += value*2;
      return;
    }

    value -= this.shield;
    if (this.shield > 0) {
      this.logAction(`You blocked ${this.shield} damage!`);
      this.logAction(`Your shield broke!`);
      //Regular blocked damage is worth 1x points.
      this.score += value;
    }

    this.shield = 0;

    this.health -= value;
    this.logAction(`You take ${value} damage!`);
  }

  checkIfDead() {
    if (this.health <= 0) {
      this.logAction("You are dead!");
      return true;
    }

    return false;
  }

  equipShield(value: number) {
    this.shield = value;
    this.logAction(`Equiped +${value} shield!`);
  }

  heal(value: number) {
    this.health += value;

    this.logAction(`Drank +${value} potion!`);

    if (this.health > this.maxHealth) {
      this.health = this.maxHealth;
      this.logAction(`Health is maximum!`);
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

  initializeHero() {
    this.maxHealth = 20;
    this.health    = 20; 
    this.shield    = 5;
    this.score     = 0;
    this.log       = new Array<string>();
  }

  logAction(value: string) {
    this.log.unshift(value);
  }

}
