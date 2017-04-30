import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Card } from './card/card';

@Injectable()
export class CardResolveService {
  private cardResolvedSource = new Subject<Card>();

  cardResolved$ = this.cardResolvedSource.asObservable();

  resolveCard(card: Card) {
    this.cardResolvedSource.next(card);
  }
}
