import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopSpeedingComponent } from './test-top-speeding.component';

describe('TestTopSpeedingComponent', () => {
  let component: TestTopSpeedingComponent;
  let fixture: ComponentFixture<TestTopSpeedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopSpeedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopSpeedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
