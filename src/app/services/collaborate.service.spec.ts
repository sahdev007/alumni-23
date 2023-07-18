import { TestBed } from '@angular/core/testing';

import { CollaborateService } from './collaborate.service';

describe('CollaborateService', () => {
  let service: CollaborateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollaborateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
