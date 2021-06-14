import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopHighPulseComponent } from './test-top-high-pulse.component';

describe('TestTopHighPulseComponent', () => {
  let component: TestTopHighPulseComponent;
  let fixture: ComponentFixture<TestTopHighPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopHighPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopHighPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
