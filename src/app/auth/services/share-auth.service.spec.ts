import { TestBed } from '@angular/core/testing';

import { ShareAuthService } from './share-auth.service';

describe('ShareAuthService', () => {
  let service: ShareAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
