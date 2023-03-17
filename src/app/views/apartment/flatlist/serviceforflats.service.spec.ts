import { TestBed } from '@angular/core/testing';

import { ServiceforflatsService } from './serviceforflats.service';

describe('ServiceforflatsService', () => {
  let service: ServiceforflatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceforflatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
