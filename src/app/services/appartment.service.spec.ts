import { TestBed } from '@angular/core/testing';

import { AppartmentService } from './appartment.service';

describe('AppartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppartmentService = TestBed.get(AppartmentService);
    expect(service).toBeTruthy();
  });
});
