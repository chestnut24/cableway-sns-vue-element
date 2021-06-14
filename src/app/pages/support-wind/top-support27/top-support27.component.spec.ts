import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSupport27Component } from './top-support27.component';

describe('TopSupport27Component', () => {
  let component: TopSupport27Component;
  let fixture: ComponentFixture<TopSupport27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSupport27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSupport27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
