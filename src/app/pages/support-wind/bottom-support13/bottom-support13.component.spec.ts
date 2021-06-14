import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSupport13Component } from './bottom-support13.component';

describe('BottomSupport13Component', () => {
  let component: BottomSupport13Component;
  let fixture: ComponentFixture<BottomSupport13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSupport13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSupport13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
