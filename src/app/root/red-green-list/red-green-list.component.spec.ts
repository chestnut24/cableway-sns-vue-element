import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedGreenListComponent } from './red-green-list.component';

describe('RedGreenListComponent', () => {
  let component: RedGreenListComponent;
  let fixture: ComponentFixture<RedGreenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedGreenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedGreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
