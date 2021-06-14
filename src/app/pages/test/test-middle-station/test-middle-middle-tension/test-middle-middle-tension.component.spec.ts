import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleMiddleTensionComponent } from './test-middle-middle-tension.component';

describe('TestMiddleMiddleTensionComponent', () => {
  let component: TestMiddleMiddleTensionComponent;
  let fixture: ComponentFixture<TestMiddleMiddleTensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleMiddleTensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleMiddleTensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
