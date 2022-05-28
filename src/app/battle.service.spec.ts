import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TestBed } from '@angular/core/testing';
import { BattleService } from './battle.service';

describe('BattleService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let battleService: BattleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    battleService = TestBed.inject(BattleService);
  });

  it('should be created', () => {
    expect(battleService).toBeTruthy();
  });
});
