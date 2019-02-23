import { TestBed } from '@angular/core/testing';

import { PatientCareService } from './patient-care.service';

describe('PatientCareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientCareService = TestBed.get(PatientCareService);
    expect(service).toBeTruthy();
  });
});
