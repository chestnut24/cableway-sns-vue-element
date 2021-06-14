import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDriveComponent } from './top-drive.component';

describe('TopDriveComponent', () => {
  let component: TopDriveComponent;
  let fixture: ComponentFixture<TopDriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
