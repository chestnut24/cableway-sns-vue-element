import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedEchartsComponent } from './speed-echarts.component';

describe('SpeedEchartsComponent', () => {
  let component: SpeedEchartsComponent;
  let fixture: ComponentFixture<SpeedEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
