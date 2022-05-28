import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BattleComponent } from './battle.component';
import { PantheonService } from '../services/pantheon.service';
import { TeamService } from '../services/team.service';
import { ChampionService } from '../services/champion.service';
import { BattleLogService } from '../services/battle-log.service';
import { BattleService } from '../services/battle.service';
import { of } from 'rxjs';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;
  let fakePantheonService: PantheonService;
  let fakeTeamService: TeamService;
  let fakeChampionService: ChampionService;
  let fakeBattleLogService: BattleLogService;
  let fakeBattleService: BattleService;

  beforeEach(async () => {
    fakeTeamService = jasmine.createSpyObj<TeamService>('TeamService', {
      getTeam: of(),
    });

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

    fakeBattleLogService = jasmine.createSpyObj<BattleLogService>(
      'BattleLogService',
      {
        clear: undefined,
      }
    );

    fakeBattleService = jasmine.createSpyObj<BattleService>('BattleService', {
      getRandomPantheon: undefined,
    });

    await TestBed.configureTestingModule({
      declarations: [BattleComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: PantheonService, useValue: fakePantheonService },
        { provide: TeamService, useValue: fakeTeamService },
        { provide: ChampionService, useValue: fakeChampionService },
        { provide: BattleLogService, useValue: fakeBattleLogService },
        { provide: BattleService, useValue: fakeBattleService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
