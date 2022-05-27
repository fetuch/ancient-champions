import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { TestBed } from '@angular/core/testing';
import { PantheonService } from './pantheon.service';

describe('PantheonService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let pantheonService: PantheonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    pantheonService = TestBed.inject(PantheonService);
  });

  it('should be created', () => {
    expect(pantheonService).toBeTruthy();
  });
});
