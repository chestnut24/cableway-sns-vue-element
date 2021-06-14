import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableHoldingForceComponent } from './cable-holding-force.component';

describe('CableHoldingForceComponent', () => {
  let component: CableHoldingForceComponent;
  let fixture: ComponentFixture<CableHoldingForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableHoldingForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableHoldingForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
