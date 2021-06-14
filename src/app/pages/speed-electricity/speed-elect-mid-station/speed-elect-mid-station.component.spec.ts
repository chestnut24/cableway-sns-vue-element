import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedElectMidStationComponent } from './speed-elect-mid-station.component';

describe('SpeedElectMidStationComponent', () => {
  let component: SpeedElectMidStationComponent;
  let fixture: ComponentFixture<SpeedElectMidStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedElectMidStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedElectMidStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
