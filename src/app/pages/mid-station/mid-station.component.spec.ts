import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidStationComponent } from './mid-station.component';

describe('MidStationComponent', () => {
  let component: MidStationComponent;
  let fixture: ComponentFixture<MidStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
