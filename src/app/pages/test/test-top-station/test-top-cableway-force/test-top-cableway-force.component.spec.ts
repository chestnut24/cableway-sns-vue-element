import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopCablewayForceComponent } from './test-top-cableway-force.component';

describe('TestTopCablewayForceComponent', () => {
  let component: TestTopCablewayForceComponent;
  let fixture: ComponentFixture<TestTopCablewayForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopCablewayForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopCablewayForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
