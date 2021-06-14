import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableHoldingHistoryComponent } from './cable-holding-history.component';

describe('CableHoldingHistoryComponent', () => {
  let component: CableHoldingHistoryComponent;
  let fixture: ComponentFixture<CableHoldingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableHoldingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableHoldingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
