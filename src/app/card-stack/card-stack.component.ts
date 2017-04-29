import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stack',
  templateUrl: './card-stack.component.html',
  styleUrls: ['./card-stack.component.css']
})
export class CardStackComponent implements OnInit {
  public cards;

  constructor() { }

  ngOnInit() {
    this.cards = [];
  }

}
