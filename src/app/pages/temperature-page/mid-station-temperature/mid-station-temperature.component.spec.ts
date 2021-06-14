import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidStationTemperatureComponent } from './mid-station-temperature.component';

describe('MidStationTemperatureComponent', () => {
  let component: MidStationTemperatureComponent;
  let fixture: ComponentFixture<MidStationTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidStationTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidStationTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
