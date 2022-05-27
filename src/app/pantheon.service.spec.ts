import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PantheonService } from './pantheon.service';

describe('PantheonService', () => {
  let service: PantheonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PantheonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
