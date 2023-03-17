import { TestBed } from '@angular/core/testing';

import { ServiceimageService } from './serviceimage.service';

describe('ServiceimageService', () => {
  let service: ServiceimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
