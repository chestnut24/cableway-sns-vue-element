import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTopTopDriveComponent } from './test-top-top-drive.component';

describe('TestTopTopDriveComponent', () => {
  let component: TestTopTopDriveComponent;
  let fixture: ComponentFixture<TestTopTopDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTopTopDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopTopDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
