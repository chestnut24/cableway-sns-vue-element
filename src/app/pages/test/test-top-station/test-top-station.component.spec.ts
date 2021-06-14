import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopStationComponent } from './test-top-station.component';

describe('TestTopStationComponent', () => {
  let component: TestTopStationComponent;
  let fixture: ComponentFixture<TestTopStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
