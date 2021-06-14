import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomTensionComponent } from './bottom-tension.component';

describe('BottomTensionComponent', () => {
  let component: BottomTensionComponent;
  let fixture: ComponentFixture<BottomTensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomTensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomTensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
