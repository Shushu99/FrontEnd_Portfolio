import { TestBed } from '@angular/core/testing';

import { ServiceExpeService } from './service-expe.service';

describe('ServiceExpeService', () => {
  let service: ServiceExpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
