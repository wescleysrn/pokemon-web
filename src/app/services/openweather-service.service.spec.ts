import { TestBed } from '@angular/core/testing';

import { OpenweatherServiceService } from './openweather-service.service';

describe('OpenweatherServiceService', () => {
  let service: OpenweatherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenweatherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
