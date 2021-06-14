import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMiddleCablewayForceComponent } from './test-middle-cableway-force.component';

describe('TestMiddleCablewayForceComponent', () => {
  let component: TestMiddleCablewayForceComponent;
  let fixture: ComponentFixture<TestMiddleCablewayForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMiddleCablewayForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMiddleCablewayForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
