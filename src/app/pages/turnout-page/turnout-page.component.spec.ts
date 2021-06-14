import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoutPageComponent } from './turnout-page.component';

describe('TurnoutPageComponent', () => {
  let component: TurnoutPageComponent;
  let fixture: ComponentFixture<TurnoutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
