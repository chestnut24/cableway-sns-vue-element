import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopLowPulseComponent } from './test-top-low-pulse.component';

describe('TestTopLowPulseComponent', () => {
  let component: TestTopLowPulseComponent;
  let fixture: ComponentFixture<TestTopLowPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopLowPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopLowPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
