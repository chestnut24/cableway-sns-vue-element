import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JnTableComponent } from './delong-table.component';

describe('DelongTableComponent', () => {
  let component: JnTableComponent;
  let fixture: ComponentFixture<JnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
