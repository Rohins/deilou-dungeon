import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public faceValue: string;
  public faceUp: boolean;
  public suite: string;

  constructor() { }

  ngOnInit() {
    this.faceValue = "K";
    this.faceUp = true;
    this.suite = "clovers";
  }

  getValue() {
    return 10;
  }

  /**
   * Flip the card!
   **/
  flip() {
    console.log("Flipping!");
    this.faceUp = this.faceUp ? false : true;
  }

}
