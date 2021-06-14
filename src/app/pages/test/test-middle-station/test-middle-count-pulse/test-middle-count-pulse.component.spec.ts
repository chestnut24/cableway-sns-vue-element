import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleCountPulseComponent } from './test-middle-count-pulse.component';

describe('TestMiddleCountPulseComponent', () => {
  let component: TestMiddleCountPulseComponent;
  let fixture: ComponentFixture<TestMiddleCountPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleCountPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleCountPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
