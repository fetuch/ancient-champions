import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PantheonComponent } from './pantheon.component';
import { PantheonService } from '../pantheon.service';
import { ChampionService } from '../champion.service';
import { TeamService } from '../team.service';
import { of } from 'rxjs';

describe('PantheonComponent', () => {
  let component: PantheonComponent;
  let fixture: ComponentFixture<PantheonComponent>;
  let fakeChampionService: ChampionService;
  let fakePantheonService: PantheonService;
  let fakeTeamService: TeamService;

  beforeEach(async () => {
    fakeChampionService = jasmine.createSpyObj<ChampionService>(
      'ChampionService',
      {
        getChampions: of([]),
      }
    );

    fakePantheonService = jasmine.createSpyObj<PantheonService>(
      'PantheonService',
      {
        getPantheon: of(),
      }
    );

    fakeTeamService = jasmine.createSpyObj<TeamService>('TeamService', {
      registerTeam: undefined,
    });

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PantheonComponent],
      providers: [
        { provide: PantheonService, useValue: fakePantheonService },
        { provide: ChampionService, useValue: fakeChampionService },
        { provide: TeamService, useValue: fakeTeamService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
