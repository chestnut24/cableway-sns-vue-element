import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWarningListComponent } from './top-warning-list.component';

describe('TopWarningListComponent', () => {
  let component: TopWarningListComponent;
  let fixture: ComponentFixture<TopWarningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWarningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWarningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
