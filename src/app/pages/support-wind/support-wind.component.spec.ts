import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportWindComponent } from './support-wind.component';

describe('SupportWindComponent', () => {
  let component: SupportWindComponent;
  let fixture: ComponentFixture<SupportWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
