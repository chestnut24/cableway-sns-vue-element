import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTopStationComponent } from './overview-top-station.component';

describe('OverviewTopStationComponent', () => {
  let component: OverviewTopStationComponent;
  let fixture: ComponentFixture<OverviewTopStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewTopStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewTopStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
