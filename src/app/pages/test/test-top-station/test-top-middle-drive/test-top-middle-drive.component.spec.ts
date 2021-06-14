import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopMiddleDriveComponent } from './test-top-middle-drive.component';

describe('TestTopMiddleDriveComponent', () => {
  let component: TestTopMiddleDriveComponent;
  let fixture: ComponentFixture<TestTopMiddleDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopMiddleDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopMiddleDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
