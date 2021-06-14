import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturePageComponent } from './temperature-page.component';

describe('TemperaturePageComponent', () => {
  let component: TemperaturePageComponent;
  let fixture: ComponentFixture<TemperaturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
