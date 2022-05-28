import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChampionService } from '../../services/champion.service';
import { ChampionsComponent } from './champions.component';
import { of } from 'rxjs';

describe('ChampionsComponent', () => {
  let component: ChampionsComponent;
  let fixture: ComponentFixture<ChampionsComponent>;
  let fakeChampionService: ChampionService;

  beforeEach(async () => {
    fakeChampionService = jasmine.createSpyObj<ChampionService>(
      'ChampionService',
      {
        getChampions: of([]),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [ChampionsComponent],
      providers: [{ provide: ChampionService, useValue: fakeChampionService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
