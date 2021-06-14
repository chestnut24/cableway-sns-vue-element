import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStationInfoComponent } from './overview-station-info.component';

describe('OverviewStationInfoComponent', () => {
  let component: OverviewStationInfoComponent;
  let fixture: ComponentFixture<OverviewStationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewStationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewStationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
