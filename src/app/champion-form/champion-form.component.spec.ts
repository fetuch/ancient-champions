import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChampionFormComponent } from './champion-form.component';
import { PantheonService } from '../pantheon.service';
import { ChampionService } from '../champion.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('ChampionFormComponent', () => {
  let component: ChampionFormComponent;
  let fixture: ComponentFixture<ChampionFormComponent>;
  let fakeChampionService: ChampionService;
  let fakePantheonService: PantheonService;

  beforeEach(async () => {
    fakeChampionService = jasmine.createSpyObj<ChampionService>(
      'ChampionService',
      {
        getChampion: of(),
      }
    );

    fakePantheonService = jasmine.createSpyObj<PantheonService>(
      'PantheonService',
      {
        getPantheons: of(),
      }
    );
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ChampionFormComponent],
      providers: [
        { provide: PantheonService, useValue: fakePantheonService },
        { provide: ChampionService, useValue: fakeChampionService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
