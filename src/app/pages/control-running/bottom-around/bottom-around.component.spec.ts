import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomAroundComponent } from './bottom-around.component';

describe('BottomAroundComponent', () => {
  let component: BottomAroundComponent;
  let fixture: ComponentFixture<BottomAroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomAroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomAroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
