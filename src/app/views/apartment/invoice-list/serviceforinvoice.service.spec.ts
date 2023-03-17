import { TestBed } from '@angular/core/testing';

import { ServiceforinvoiceService } from './serviceforinvoice.service';

describe('ServiceforinvoiceService', () => {
  let service: ServiceforinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceforinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
