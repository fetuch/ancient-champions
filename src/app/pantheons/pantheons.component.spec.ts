import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantheonsComponent } from './pantheons.component';
import { PantheonService } from '../pantheon.service';
import { of } from 'rxjs';

describe('PantheonsComponent', () => {
  let component: PantheonsComponent;
  let fixture: ComponentFixture<PantheonsComponent>;
  let fakePantheonService: PantheonService;

  beforeEach(async () => {
    fakePantheonService = jasmine.createSpyObj<PantheonService>(
      'PantheonService',
      {
        getPantheons: of(),
      }
    );

    await TestBed.configureTestingModule({
      declarations: [PantheonsComponent],
      providers: [{ provide: PantheonService, useValue: fakePantheonService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantheonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
