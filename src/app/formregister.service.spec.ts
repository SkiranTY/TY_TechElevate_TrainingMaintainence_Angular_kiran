import { TestBed } from '@angular/core/testing';

import { FormregisterService } from './formregister.service';

describe('FormregisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormregisterService = TestBed.get(FormregisterService);
    expect(service).toBeTruthy();
  });
});
