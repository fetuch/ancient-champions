import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BattleComponent } from './battle.component';
import { TeamService } from '../../services/team.service';
import { BattleLogService } from '../../services/battle-log.service';
import { BattleService } from '../../services/battle.service';
import { of } from 'rxjs';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;
  let fakeTeamService: TeamService;
  let fakeBattleLogService: BattleLogService;
  let fakeBattleService: BattleService;

  beforeEach(async () => {
    fakeTeamService = jasmine.createSpyObj<TeamService>('TeamService', {
      getTeam: of(),
    });

    fakeBattleLogService = jasmine.createSpyObj<BattleLogService>(
      'BattleLogService',
      {
        clear: undefined,
      }
    );

    fakeBattleService = jasmine.createSpyObj<BattleService>('BattleService', {
      getOpponents: undefined,
      prepareOpponents: undefined,
    });

    await TestBed.configureTestingModule({
      declarations: [BattleComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: TeamService, useValue: fakeTeamService },
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
