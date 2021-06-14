import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewWitchIconComponent } from './overview-witch-icon.component';

describe('OverviewWitchIconComponent', () => {
  let component: OverviewWitchIconComponent;
  let fixture: ComponentFixture<OverviewWitchIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewWitchIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewWitchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
