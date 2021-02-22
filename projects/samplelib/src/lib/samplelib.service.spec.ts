import { TestBed } from '@angular/core/testing';

import { SamplelibService } from './samplelib.service';

describe('SamplelibService', () => {
  let service: SamplelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamplelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
