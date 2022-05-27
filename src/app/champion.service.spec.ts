// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Champion } from './champion';
import { ChampionService } from './champion.service';

describe('ChampionService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let championService: ChampionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    championService = TestBed.inject(ChampionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(championService).toBeTruthy();
  });

  describe('#getChampions', () => {
    const expectedChampions: Champion[] = [
      { id: 1, name: 'Apophis' },
      { id: 2, name: 'Thor' },
    ] as Champion[];

    it('should return expected champions', () => {
      championService.getChampions().subscribe((champions) => {
        expect(champions.length).toBe(2);
        expect(champions).toEqual(expectedChampions);
      });

      const req = httpTestingController.expectOne(championService.championsUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedChampions);
    });

    it('should be OK returning no champions', () => {
      championService
        .getChampions()
        .subscribe((champions) => expect(champions.length).toEqual(0));

      const req = httpTestingController.expectOne(championService.championsUrl);
      req.flush([]); // Respond with no champions
    });

    it('should turn 404 into an empty champions result', () => {
      championService
        .getChampions()
        .subscribe((champions) => expect(champions.length).toEqual(0));

      const req = httpTestingController.expectOne(championService.championsUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });

  describe('#getChampion', () => {
    const expectedChampion: Champion = { id: 2, name: 'Thor' } as Champion;

    it('should return expected champion', () => {
      championService
        .getChampion(1)
        .subscribe((champion) => expect(champion).toEqual(expectedChampion));

      const req = httpTestingController.expectOne(
        `${championService.championsUrl}/1`
      );

      expect(req.request.method).toEqual('GET');

      req.flush(expectedChampion);
    });
  });

  describe('#addChampion', () => {
    it('should save a champion and return it', () => {
      const champion: Champion = { name: 'A' } as Champion;

      championService
        .addChampion(champion)
        .subscribe((data) => expect(data).toEqual(champion));

      const req = httpTestingController.expectOne(championService.championsUrl);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(champion);

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: champion,
      });

      req.event(expectedResponse);
    });

    it('should turn 404 error into return of the added champion', () => {
      const champion: Champion = { name: 'A' } as Champion;

      championService
        .addChampion(champion)
        .subscribe((data) => expect(data).toEqual(champion));

      const req = httpTestingController.expectOne(championService.championsUrl);

      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });

  describe('#updateChampion', () => {
    it('should update a champion and return it', () => {
      const updateChampion: Champion = { id: 1, name: 'A' } as Champion;

      championService
        .updateChampion(updateChampion)
        .subscribe((data) => expect(data).toEqual(updateChampion));

      const req = httpTestingController.expectOne(championService.championsUrl);
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updateChampion);

      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: updateChampion,
      });

      req.event(expectedResponse);
    });

    it('should turn 404 error into return of the update champion', () => {
      const updateChampion: Champion = { id: 1, name: 'A' } as Champion;

      championService
        .updateChampion(updateChampion)
        .subscribe((data) => expect(data).toEqual(updateChampion));

      const req = httpTestingController.expectOne(championService.championsUrl);

      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });

  describe('#deleteChampion', () => {
    let champion: Champion;

    beforeEach(() => {
      champion = { id: 1, name: 'Apophis' } as Champion;
    });

    it('should remove champion from champions list', () => {
      const url = `${championService.championsUrl}/1`;

      championService
        .deleteChampion(1)
        .subscribe((data) => expect(data).toEqual(champion));

      const req = httpTestingController.expectOne(url);
      expect(req.request.method).toEqual('DELETE');

      req.flush(champion);
    });
  });

  describe('searchChampions', () => {
    const expectedChampions: Champion[] = [
      { id: 2, name: 'Thor' },
      { id: 3, name: 'Thot' },
    ] as Champion[];

    const term: string = 'ho';

    it('should return expected champions', () => {
      championService.searchChampions(term).subscribe((champions) => {
        expect(champions.length).toBe(2);
        expect(champions).toEqual(expectedChampions);
      });

      const req = httpTestingController.expectOne(
        `${championService.championsUrl}/?name=${term}`
      );
      expect(req.request.method).toEqual('GET');

      req.flush(expectedChampions);
    });

    it('should turn 404 into an empty champions result', () => {
      championService
        .searchChampions(term)
        .subscribe((champions) => expect(champions.length).toEqual(0));

      const req = httpTestingController.expectOne(
        `${championService.championsUrl}/?name=${term}`
      );

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' });
    });
  });
});
