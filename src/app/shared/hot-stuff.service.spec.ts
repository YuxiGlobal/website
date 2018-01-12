import { TestBed, inject } from '@angular/core/testing';

import { HotStuffService } from './hot-stuff.service';

describe('HotStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotStuffService]
    });
  });

  it('should be created', inject([HotStuffService], (service: HotStuffService) => {
    expect(service).toBeTruthy();
  }));
});
