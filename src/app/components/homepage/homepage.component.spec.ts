import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageComponent } from './homepage.component';
import { PantheonService } from '../../services/pantheon.service';
import { ChampionService } from '../../services/champion.service';
import { of } from 'rxjs';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let fakeChampionService: ChampionService;
  let fakePantheonService: PantheonService;

  beforeEach(async () => {
    fakeChampionService = jasmine.createSpyObj<ChampionService>(
      'ChampionService',
      {
        getChampions: of(),
      }
    );

    fakePantheonService = jasmine.createSpyObj<PantheonService>(
      'PantheonService',
      {
        getPantheon: of(),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [HomepageComponent],
      providers: [
        { provide: PantheonService, useValue: fakePantheonService },
        { provide: ChampionService, useValue: fakeChampionService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Ancient Champions'
    );
  });
});
