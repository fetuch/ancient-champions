import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleChampionDetailComponent } from './battle-champion-detail.component';

describe('BattleChampionDetailComponent', () => {
  let component: BattleChampionDetailComponent;
  let fixture: ComponentFixture<BattleChampionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleChampionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleChampionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
