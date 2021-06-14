import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomStationComponent } from './bottom-station.component';

describe('BottomStationComponent', () => {
  let component: BottomStationComponent;
  let fixture: ComponentFixture<BottomStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
