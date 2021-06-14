import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSupport17Component } from './bottom-support17.component';

describe('BottomSupport17Component', () => {
  let component: BottomSupport17Component;
  let fixture: ComponentFixture<BottomSupport17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSupport17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSupport17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
