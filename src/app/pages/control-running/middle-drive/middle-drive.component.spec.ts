import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleDriveComponent } from './middle-drive.component';

describe('MiddleDriveComponent', () => {
  let component: MiddleDriveComponent;
  let fixture: ComponentFixture<MiddleDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
