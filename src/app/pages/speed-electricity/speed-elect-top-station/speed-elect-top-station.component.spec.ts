import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedElectTopStationComponent } from './speed-elect-top-station.component';

describe('SpeedElectTopStationComponent', () => {
  let component: SpeedElectTopStationComponent;
  let fixture: ComponentFixture<SpeedElectTopStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedElectTopStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedElectTopStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
