import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleBottomTensionComponent } from './test-middle-bottom-tension.component';

describe('TestMiddleBottomTensionComponent', () => {
  let component: TestMiddleBottomTensionComponent;
  let fixture: ComponentFixture<TestMiddleBottomTensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleBottomTensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleBottomTensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
