import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleHighPulseComponent } from './test-middle-high-pulse.component';

describe('TestMiddleHighPulseComponent', () => {
  let component: TestMiddleHighPulseComponent;
  let fixture: ComponentFixture<TestMiddleHighPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleHighPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleHighPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
