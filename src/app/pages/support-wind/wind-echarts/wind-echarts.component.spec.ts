import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindEchartsComponent } from './wind-echarts.component';

describe('WindEchartsComponent', () => {
  let component: WindEchartsComponent;
  let fixture: ComponentFixture<WindEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
