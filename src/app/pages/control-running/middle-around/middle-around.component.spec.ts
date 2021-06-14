import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleAroundComponent } from './middle-around.component';

describe('MiddleAroundComponent', () => {
  let component: MiddleAroundComponent;
  let fixture: ComponentFixture<MiddleAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
