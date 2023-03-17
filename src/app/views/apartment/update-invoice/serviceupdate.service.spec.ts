import { TestBed } from '@angular/core/testing';

import { ServiceupdateService } from './serviceupdate.service';

describe('ServiceupdateService', () => {
  let service: ServiceupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
