import { TestBed, inject } from '@angular/core/testing';

import { CardResolveService } from './card-resolve.service';

describe('CardResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardResolveService]
    });
  });

  it('should ...', inject([CardResolveService], (service: CardResolveService) => {
    expect(service).toBeTruthy();
  }));
});
