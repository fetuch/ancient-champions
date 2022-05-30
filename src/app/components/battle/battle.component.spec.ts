import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BattleComponent } from './battle.component';
import { BattleLogService } from '../../services/battle-log.service';
import { BattleService } from '../../services/battle.service';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;
  let fakeBattleLogService: BattleLogService;
  let fakeBattleService: BattleService;

  beforeEach(async () => {
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
