import { TestBed } from '@angular/core/testing';

import { BattleLogService } from './battle-log.service';
import { Log } from '../log';

describe('BattleLogService', () => {
  let service: BattleLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(BattleLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns log list', () => {
    let actualLogList: Log[] = [];

    service.getLogs().subscribe((logs) => {
      actualLogList = logs;
    });

    expect(actualLogList).toHaveSize(0);
  });

  it('adds new log at the begining of log list', () => {
    const log: Log = { message: 'new message' };

    service.add(log);

    let actualLogList: Log[] = [];

    service.getLogs().subscribe((logs) => {
      actualLogList = logs;
    });

    expect(actualLogList).toHaveSize(1);
  });

  it('clears the log list', () => {
    const log: Log = { message: 'new message' };
    service.add(log);
    service.clear();

    let actualLogList: Log[] = [];

    service.getLogs().subscribe((logs) => {
      actualLogList = logs;
    });

    expect(actualLogList).toHaveSize(0);
  });
});
