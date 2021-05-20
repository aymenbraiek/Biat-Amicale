import { TestBed } from '@angular/core/testing';

import { ResidenceService } from './residence.service';

describe('ResidenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidenceService = TestBed.get(ResidenceService);
    expect(service).toBeTruthy();
  });
});
