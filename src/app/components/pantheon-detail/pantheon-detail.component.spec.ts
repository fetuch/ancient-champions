import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantheonDetailComponent } from './pantheon-detail.component';

describe('PantheonDetailComponent', () => {
  let component: PantheonDetailComponent;
  let fixture: ComponentFixture<PantheonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantheonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantheonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
