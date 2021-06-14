import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitousTensionComponent } from './circuitous-tension.component';

describe('CircuitousTensionComponent', () => {
  let component: CircuitousTensionComponent;
  let fixture: ComponentFixture<CircuitousTensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitousTensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitousTensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
