import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveAuxiliaryMachineComponent } from './drive-auxiliary-machine.component';

describe('DriveAuxiliaryMachineComponent', () => {
  let component: DriveAuxiliaryMachineComponent;
  let fixture: ComponentFixture<DriveAuxiliaryMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveAuxiliaryMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveAuxiliaryMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
