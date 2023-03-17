import { TestBed } from '@angular/core/testing';

import { ServicefordetailsofuserService } from './servicefordetailsofuser.service';

describe('ServicefordetailsofuserService', () => {
  let service: ServicefordetailsofuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicefordetailsofuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
