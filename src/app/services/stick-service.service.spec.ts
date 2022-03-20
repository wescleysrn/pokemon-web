import { TestBed } from '@angular/core/testing';

import { StickServiceService } from './stick-service.service';

describe('StickServiceService', () => {
  let service: StickServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
