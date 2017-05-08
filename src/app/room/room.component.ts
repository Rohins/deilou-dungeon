import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card/card';
import { CardResolveService } from '../card-resolve.service';
import { ResetGameService } from '../reset-game.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  inputs: ['floor']
})
export class RoomComponent implements OnInit {
  public deck:   Deck;

  /**
   * Card Arrays for holding cards for the rooms.
   **/
  public top:    Array<Card>;
  public right:  Array<Card>;
  public middle: Array<Card>;
  public left:   Array<Card>;
  public bottom: Array<Card>;

  /**
   * Floor number, used for generating the rooms
   **/
  public floor;

  /**
   * Cards left over from the previous floor. They
   * go to the top room.
   **/
  public previousCards = new Array<Card>();

  constructor(private _cardResolveService: CardResolveService, private _resetGameService: ResetGameService) { }

  ngOnInit() {
    this.deck = new Deck;
    this.createFloor();

    this._cardResolveService.cardResolved$.subscribe(
      card => {
        console.log(this.cardsLeft());
        if (this.cardsLeft() == 0) {
          this.nextFloor();
        }
      });
  }

  newFloor(floor: number) {
    this.floor = floor;
    this.createFloor();
  }

  /**
   * Takes previous cards and puts them into the
   * top room. Creates the remaining rooms based 
   * on the floor number. Floors 1-4 will have 
   * each of the rooms have cards equal to the
   * floor number. Floor 5 will have middle and
   * bottom rooms equal to 6 cards. This is due
   * to the limitation of using a standard deck
   **/
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

  /**
   * Increments the floor number. Collects and
   * processes the remaining cards. Creates the
   * floor.
   **/
  nextFloor() {
    this.playStairsSound();
    this.animateFadeIn();
    this.floor = `${parseInt(this.floor) + 1}`;
    this.collectPreviousCards();
    this.createFloor();
  }

  /**
   * Reset the floor to 1 when trying again.
   * Cleanup any cards in the previous stack.
   **/
  tryAgain() {
    this.deck = new Deck;
    this.previousCards = new Array<Card>();
    this.floor = 1;
    this.createFloor();

    this._resetGameService.resetGame();
  }

  /**
   * Cards left over when going to the next room
   * go through a process, then are collected and
   * placed in the top room. All completed cards
   * are excluded. All beneficial face up cards
   * are excluded. The remaining are collected.
   **/
  collectPreviousCards() {
    this.previousCards = new Array<Card>();
    this.removeCompletedCards();
    this.removeFaceUpBeneficialCards();
    this.mergeRemainingCards();
    this.flipRemainingCardsFaceDown();
  }

  cardsLeft() {
    let cardsLeft = 0;
    cardsLeft += this.cardsLeftInStack(this.top);
    cardsLeft += this.cardsLeftInStack(this.middle);
    cardsLeft += this.cardsLeftInStack(this.bottom);
    cardsLeft += this.cardsLeftInStack(this.left);
    cardsLeft += this.cardsLeftInStack(this.right);

    return cardsLeft;
  }

  cardsLeftInStack(stack) {
    let cardsLeft = 0;
    stack.forEach(
      card => {
        if (!card.complete) {
          cardsLeft += 1;
        }
      });

    return cardsLeft;
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

  flipRemainingCardsFaceDown() {
    this.previousCards = this.previousCards.map(
      card => {
        card.faceUp = false;
        return card;
      });
  }

  playStairsSound() {
    let audio = <HTMLAudioElement>document.getElementById('stairs_sound');
    audio.play();
  }

  animateFadeIn() {
    console.log("Fading floor");
    let main = document.getElementById('floor');
    console.log(main);
    main.classList.add("fade_in_animation");
    console.log(main);

    setTimeout( ()=> {
      main.classList.remove("fade_in_animation");
    }, 2000);
  }
}
