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
    return 10;
  }

}
