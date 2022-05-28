import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { TestBed } from '@angular/core/testing';
import { TeamService } from './team.service';

describe('TeamService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let teamService: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    teamService = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(teamService).toBeTruthy();
  });
});
