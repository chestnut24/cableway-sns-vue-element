import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePosswordComponent } from './change-possword.component';

describe('ChangePosswordComponent', () => {
  let component: ChangePosswordComponent;
  let fixture: ComponentFixture<ChangePosswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePosswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePosswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
