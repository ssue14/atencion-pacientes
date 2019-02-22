import { TestBed } from '@angular/core/testing';

import { HandlerMessageService } from './handler-message.service';

describe('HandlerMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlerMessageService = TestBed.get(HandlerMessageService);
    expect(service).toBeTruthy();
  });
});
