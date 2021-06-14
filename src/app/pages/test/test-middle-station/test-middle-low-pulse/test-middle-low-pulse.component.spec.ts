import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleLowPulseComponent } from './test-middle-low-pulse.component';

describe('TestMiddleLowPulseComponent', () => {
  let component: TestMiddleLowPulseComponent;
  let fixture: ComponentFixture<TestMiddleLowPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleLowPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleLowPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
