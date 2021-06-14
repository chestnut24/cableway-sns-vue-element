import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStationTemperatureComponent } from './top-station-temperature.component';

describe('TopStationTemperatureComponent', () => {
  let component: TopStationTemperatureComponent;
  let fixture: ComponentFixture<TopStationTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStationTemperatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStationTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
