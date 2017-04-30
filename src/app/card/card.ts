export class Card {
  /**
   * The face of the card. Legal values 1-9,J,Q,K,A
   **/
  public face: string;

  /**
   * The suite of the card: clovers, hearts, diamonds, spades.
   **/
  public suite: string;

  /**
   * State for determining if the card is fully resolved.
   **/
  public complete = false;

  /**
   * State for determining if the card is face up.
   **/
  public faceUp   = false;

  constructor(face: string, suite: string) { 
    this.face = face; 
    this.suite = suite; 
  }

  /**
   * Converts the card's face to a numeric value.
   **/
  value() {
    let values = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "J": 10,
      "Q": 10,
      "K": 10,
      "A": 11
    }

    return values[this.face];
  }

  /**
   * Checks if the card is beneficial. Beneficial cards are
   * hearts and diamonds.
   **/
  beneficial() {
    return this.suite === "hearts" || this.suite === "diamonds";
  }

  /**
   * Helper function for determining if the card is face down.
   **/
  faceDown() {
    return !this.faceUp;
  }

}
