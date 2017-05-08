import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ResetGameService {

  private resetGameSource = new Subject<boolean>();

  resetedGame$ = this.resetGameSource.asObservable();

  resetGame() {
    this.resetGameSource.next(true);
  }

}
