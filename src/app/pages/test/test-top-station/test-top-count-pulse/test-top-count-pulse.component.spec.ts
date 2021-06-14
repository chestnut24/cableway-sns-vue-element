import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopCountPulseComponent } from './test-top-count-pulse.component';

describe('TestTopCountPulseComponent', () => {
  let component: TestTopCountPulseComponent;
  let fixture: ComponentFixture<TestTopCountPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopCountPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopCountPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
