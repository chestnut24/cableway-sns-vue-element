import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStationDriveAuxiliaryComponent } from './top-station-drive-auxiliary.component';

describe('TopStationDriveAuxiliaryComponent', () => {
  let component: TopStationDriveAuxiliaryComponent;
  let fixture: ComponentFixture<TopStationDriveAuxiliaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStationDriveAuxiliaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStationDriveAuxiliaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
