import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidStationDriveAuxiliaryComponent } from './mid-station-drive-auxiliary.component';

describe('MidStationDriveAuxiliaryComponent', () => {
  let component: MidStationDriveAuxiliaryComponent;
  let fixture: ComponentFixture<MidStationDriveAuxiliaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidStationDriveAuxiliaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidStationDriveAuxiliaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
