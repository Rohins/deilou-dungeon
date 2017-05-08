import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScoreService {
  private increaseFloorSource = new Subject<number>();

  increasedFloor$ = this.increaseFloorSource.asObservable();

  increaseFloor(floor: number) {
    this.increaseFloorSource.next(floor);
  }
}
