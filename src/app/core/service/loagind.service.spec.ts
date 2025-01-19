import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loagind.service';

describe('LoagindService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
