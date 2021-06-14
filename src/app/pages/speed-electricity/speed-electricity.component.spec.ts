import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedElectricityComponent } from './speed-electricity.component';

describe('SpeedElectricityComponent', () => {
  let component: SpeedElectricityComponent;
  let fixture: ComponentFixture<SpeedElectricityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedElectricityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
