import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBottomStationComponent } from './overview-bottom-station.component';

describe('OverviewBottomStationComponent', () => {
  let component: OverviewBottomStationComponent;
  let fixture: ComponentFixture<OverviewBottomStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewBottomStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBottomStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
