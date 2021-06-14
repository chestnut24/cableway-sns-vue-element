import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRunningComponent } from './control-running.component';

describe('ControlRunningComponent', () => {
  let component: ControlRunningComponent;
  let fixture: ComponentFixture<ControlRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
