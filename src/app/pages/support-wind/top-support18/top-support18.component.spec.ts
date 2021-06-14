import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSupport18Component } from './top-support18.component';

describe('TopSupport18Component', () => {
  let component: TopSupport18Component;
  let fixture: ComponentFixture<TopSupport18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSupport18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSupport18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
