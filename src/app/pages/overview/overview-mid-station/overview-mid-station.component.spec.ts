import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewMidStationComponent } from './overview-mid-station.component';

describe('OverviewMidStationComponent', () => {
  let component: OverviewMidStationComponent;
  let fixture: ComponentFixture<OverviewMidStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewMidStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewMidStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
