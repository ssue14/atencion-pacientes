import { TestBed } from '@angular/core/testing';

import { MedicalConsultationService } from './medical-consultation.service';

describe('MedicalConsultationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalConsultationService = TestBed.get(MedicalConsultationService);
    expect(service).toBeTruthy();
  });
});
