import { TestBed, inject } from '@angular/core/testing';

import { ResetGameService } from './reset-game.service';

describe('ResetGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetGameService]
    });
  });

  it('should ...', inject([ResetGameService], (service: ResetGameService) => {
    expect(service).toBeTruthy();
  }));
});
