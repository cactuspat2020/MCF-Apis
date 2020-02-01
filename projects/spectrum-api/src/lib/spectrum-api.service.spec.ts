import { TestBed } from '@angular/core/testing';

import { SpectrumApiService } from './spectrum-api.service';

describe('SpectrumApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpectrumApiService = TestBed.get(SpectrumApiService);
    expect(service).toBeTruthy();
  });
});
