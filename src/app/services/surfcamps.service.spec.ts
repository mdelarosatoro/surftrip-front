import { TestBed } from '@angular/core/testing';

import { SurfcampsService } from './surfcamps.service';

describe('SurfcampsService', () => {
  let service: SurfcampsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurfcampsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
