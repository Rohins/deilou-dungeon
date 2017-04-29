export class Card {
  /**
   * The face of the card. Legal values 1-9,J,Q,K,A
   **/
  public face: string;

  /**
   * The suite of the card: clovers, hearts, diamonds, spades.
   **/
  public suite: string;

  constructor(face: string, suite: string) { 
    this.face = face; 
    this.suite = suite; 
  }

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
      "J": 10,
      "Q": 10,
      "K": 10,
      "A": 11,
    }

    return values[this.face];
  }

}
