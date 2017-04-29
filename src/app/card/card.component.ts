import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  /**
   * State representing the card is complete. When true
   * the card will be removed.
   **/
  public complete: boolean;

  /**
   * The face value of the card. Legal values 1-9,J,Q,K,A
   **/
  public faceValue: string;

  /**
   * State representing if the card is facing up.
   **/
  public faceUp: boolean;

  /**
   * The suite of the card: clovers, hearts, diamonds, spades.
   **/
  public suite: string;

  constructor() { }

  ngOnInit() {
    this.faceValue = "K";
    this.faceUp = false;
    this.suite = "clovers";
    this.complete = false;
  }

  /**
   * Helper function for determining a numeric value for
   * the card's face value.
   **/
  getValue() {
    return 10;
  }

  /**
   * Flip the card!
   **/
  flip() {
    this.faceUp = this.faceUp ? false : true;
  }

  /**
   * If the card is facing down, flip it up.
   * Otherwise, resolve the card's mechanics.
   **/
  resolve() {
    if (!this.faceUp) {
      this.flip();
      return;
    }

    this.computeMechanics();
  }
  
  /**
   * Compute the logic based on the card's suite
   * and face value.
   **/
  computeMechanics() {
    switch(this.suite) {
      case "clovers":
        console.log(`Take ${this.getValue()} damage!`);
        this.complete = true;
        break;
    }
  }

}
