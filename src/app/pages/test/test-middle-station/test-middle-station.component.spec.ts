import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleStationComponent } from './test-middle-station.component';

describe('TestMiddleStationComponent', () => {
  let component: TestMiddleStationComponent;
  let fixture: ComponentFixture<TestMiddleStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
